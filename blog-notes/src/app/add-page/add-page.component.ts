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

  editTitleHeader(e: any) {
    console.log(e);
    // get elementid
    // change to editable text
  }

  onSubmitTemplateBased(){
    console.log(this.titleHeader);
  }
}
