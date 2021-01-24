import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';

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
  selectedFile: any;

  constructor() { 
    this.addHeading = "Note Heading";
    this.addNote = "add your note here...";
    this.addList = "";//"add list with comma as delimiter ex: 'item1,item2'";
    this.addCode = "add code example";
    this.selectedFile = null;
  }

  ngOnInit(): void {
  }

  convertToHtml(){
// TODO work out how to convert a, what format
// so add it to dom
//function to convert code
  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    let link = window.URL.createObjectURL(this.selectedFile);
    let imageTag = (document.getElementById("imagePreview") as HTMLImageElement);
    imageTag.src = link;
    imageTag.style.display = "block";
  }

/*
links I used to understand saving file
https://roytuts.com/download-file-from-server-using-angular/

*/

  fileInput(){
    // get file convert to binary then save to local folder
  }

  onUpload() {
   /* this opens the image
   var link = document.createElement('a');
    link.href = window.URL.createObjectURL(this.selectedFile);;
    link.click(); 
    */
  }
 
  closeForm(save:boolean) {
    console.log(save);
    if(!save)
     return 'close';

     return 'close';
  }
}
