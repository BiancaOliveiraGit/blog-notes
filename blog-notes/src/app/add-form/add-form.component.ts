import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';

// TODO ---
// output object
// convert form data to object ?dom object??
// convert image to base64

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
  imageTag: any;

  constructor() { 
    this.addHeading = "Note Heading";
    this.addNote = "add your note here...";
    this.addList = "";
    this.addCode = "";
    this.selectedFile = null;
  }

  ngOnInit(): void {
    this.imageTag = (document.getElementById("imagePreview") as HTMLImageElement);
  }

  convertToHtml(){
// TODO work out how to convert a, what format
// so add it to dom
//function to convert code
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    let link = window.URL.createObjectURL(this.selectedFile);
    this.imageTag.src = link;
    this.imageTag.style.display = "block";
  }

/*
links I used to understand saving file
https://roytuts.com/download-file-from-server-using-angular/

*/

  fileInput(){
   /* this function is used for the file directory modal*/
   
    // get file convert to binary then save to local folder
     /* this opens the image
   var link = document.createElement('a');
    link.href = window.URL.createObjectURL(this.selectedFile);;
    link.click(); 
    */
  }

  removeFile() {
    this.imageTag.style.display = "none";
    this.selectedFile = null;
  }
 
  closeForm(save:boolean) {
    console.log(save);
    if(!save)
     return null;

     // convert to object
     return 'close';
  }
}
