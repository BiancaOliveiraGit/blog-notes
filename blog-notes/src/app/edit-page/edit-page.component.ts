import { Component, OnInit } from '@angular/core';
/* TODO
 check file html
 add to dom with add/edit buttons
*/
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  selectedFile: any;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    let link = window.URL.createObjectURL(this.selectedFile);
    this.readImportFile(link);
  }

  fileInput(){
   /* this function is used for the file directory modal*/
  }

  async readImportFile(urlObject: any) {
    let response = await fetch(urlObject);
    let importHtml = await response.text(); // read response body as text
    //console.log(importHtml);
    // add contents to dom
    let placeholder = (document.getElementById('file-contents') as HTMLElement); 
    placeholder.insertAdjacentHTML('afterbegin', importHtml);

    // hide import
    let start = (document.getElementById('import-container') as HTMLElement);
    start.style.display= 'none';
    // get list of added notes
    let notes = document.querySelectorAll('#add-note');
    console.log(notes);
    notes.forEach(query => {
      (query as HTMLElement).style.border = '1px solid green';
    });
  }

  
  // addNote(htmlNote: any) {
  //   if(htmlNote.length > 0) {
  //     this.noteArray.push(htmlNote);
  //     // add data back to page
  //     let note = (document.getElementById('insert-notes') as HTMLElement);
  //     note.insertAdjacentHTML('afterbegin', htmlNote);
  //   };
  //   this.closeModalAddForm();
  // }
}
