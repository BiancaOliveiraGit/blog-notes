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

  constructor() { 
    this.titleHeader = 'Title Header';
    this.title = 'Title';
    let now = new Date();
    this.nowDate = now.toDateString();
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
  



}
