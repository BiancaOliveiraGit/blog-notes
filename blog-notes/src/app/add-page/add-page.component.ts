import { Component, OnInit } from '@angular/core';
import { HtmlTemplateConvert} from '../service/converter-service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  titleHeader: string;
  title: string;
  nowDate: string;
  noteArray: string[];
  tagArray: string[];
  fileName: string;

  constructor() { 
    this.titleHeader = 'Title Header';
    this.title = 'Title';
    let now = new Date();
    this.nowDate = now.toDateString();
    this.noteArray = [];
    this.tagArray = [];
    this.fileName = '';
  }

  ngOnInit(): void {
  }

  allowEdit(id: any) {
   // change to editable text
   let textInput = (document.getElementById(id) as HTMLFormElement);
   textInput.disabled = !textInput.disabled;
  }

  openModalAddForm(id: any) {
    let modal = (document.getElementById(id) as HTMLFormElement);
    modal.style.display = 'block';
  }
  
  closeModalAddForm() {
    // need to fix this hardcode of id
    let modal = (document.getElementById('addmodal') as HTMLFormElement);
    modal.style.display = 'none';
  }

  addNote(htmlNote: any) {
    if(htmlNote.length > 0) {
      this.noteArray.push(htmlNote);
      // add data back to page
      let note = (document.getElementById('insert-notes') as HTMLElement);
      note.insertAdjacentHTML('afterbegin', htmlNote);
    };
    this.closeModalAddForm();
  }

  addTag(tag: any) {
    if(tag.length > 0) {
      this.tagArray.push(...tag.split(','));
    };
  }

  exportHtml() {
    // insert data into template & save locally
    HtmlTemplateConvert(this.noteArray, this.titleHeader, this.tagArray, this.nowDate, this.fileName);
  }

  // Import 
  onFileChanged(event: any) {
    let selectedFile = event.target.files[0];
    this.fileName = selectedFile.name;
    let link = window.URL.createObjectURL(selectedFile);
    this.readImportFile(link);
  }

  fileInput(){
   /* this function is used for the file directory modal*/
  }

  async readImportFile(urlObject: any) {
    let response = await fetch(urlObject);
    let importHtml = await response.text(); // read response body as text
    // parse text to dom so can query it
    var doc = new DOMParser().parseFromString(importHtml, "text/html");
    // get placeholder on dom
    let placeholder = (document.getElementById('insert-notes') as HTMLElement); 
    // hide import
    let start = (document.getElementById('import-container') as HTMLElement);
    start.style.display= 'none';
    // get list of added notes
    let notes = doc.querySelectorAll('#add-note');
    console.log(notes);
    notes.forEach(query => {
      placeholder.appendChild(query);
      this.noteArray.push(query.innerHTML);
    });
    // get titles and add to dom
    let title = (doc.getElementById('page-title') as HTMLElement);
    let titleOnDom = (document.getElementById('title-header') as HTMLElement); 
    this.titleHeader = title.innerText;
    // get list of tags
    let existTags = doc.querySelectorAll('#tagId');
    console.log(existTags);
    existTags.forEach(query => {
      console.log('tags', query.innerHTML);
      this.addTag(query.innerHTML)
    });

  
  }

 
  
 
}
