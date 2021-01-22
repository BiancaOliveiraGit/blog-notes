import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  addHeading: string;
  addNote: string;
  addList: string;
  addCode: string;

  constructor() { 
    this.addHeading = "Note Heading";
    this.addNote = "add your note here...";
    this.addList = "add list with comma as delimiter ex: 'item1,item2'";
    this.addCode = "add code example";
  }

  ngOnInit(): void {
  }

  convertToHtml(){
// TODO work out how to convert a, what format
// so add it to dom
//function to convert code
  }

  closeForm(save:boolean) {
    console.log(save);
    if(!save)
     return 'close';

     return 'close';
  }
}
