import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import * as fileSaver from 'file-saver';
import HtmlConverter from '../service/converter-service';

// TODO ---
// add tags
// editable text to picture

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  newFormHtml: string;
  addHeading: string;
  addNote: string;
  addList: string;
  addListArray: string[];
  addCode: string;
  selectedFile: any;
  imageTag: any;
  imageData: string;
  imageAlt: string;
  reader: FileReader;

  @Output() newItemEvent = new EventEmitter<string>();


  constructor() { 
    this.newFormHtml = "";
    this.addHeading = "Note Heading";
    this.addNote = "add your note here...";
    this.addList = "";
    this.addListArray = [];
    this.addCode = "";
    this.selectedFile = null;
    this.imageData = '';
    this.imageAlt = '';
    this.reader = new FileReader();
  }

  ngOnInit(): void {
    this.imageTag = (document.getElementById("imagePreview") as HTMLImageElement);  
    
    const setImageBase64 = (value:string) => {
      this.imageData = value;
    }

    this.reader.addEventListener("load", function () {
      // convert image file to base64 string     
      setImageBase64(this.result as string);
    }, false);
  }

  // call event for @Output
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  convertToHtml(){
    // get image data
    if(this.selectedFile !== null) {
      let name = ((this.selectedFile.name) as string);
      this.imageAlt = name.substr(0, name.length - 4);
    };

    if(this.addList.length > 0) {
      this.addListArray = this.addList.split(',');
    }
  
    // convert to html string
    this.newFormHtml = HtmlConverter(this.addHeading, this.addNote, this.addListArray, this.addCode, this.imageData, this.imageAlt);
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    let link = window.URL.createObjectURL(this.selectedFile);
    this.imageTag.src = link;
    this.imageTag.style.display = "block";
    // convert to base64
    this.reader.readAsDataURL(this.selectedFile);
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
    if(!save)
    this.addNewItem('');
    
     // convert to object
     this.convertToHtml();
     this.addNewItem(this.newFormHtml);
  }
}
