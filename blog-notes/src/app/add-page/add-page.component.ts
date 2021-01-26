import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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

  constructor() { 
    this.titleHeader = 'Title Header';
    this.title = 'Title';
    let now = new Date();
    this.nowDate = now.toDateString();
    this.noteArray = [];
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
    if(htmlNote.length > 0 || htmlNote !== undefined) {
      this.noteArray.push(htmlNote);
      console.log(htmlNote);
      //TODO add data back to page
    };
    this.closeModalAddForm();
  }


}
