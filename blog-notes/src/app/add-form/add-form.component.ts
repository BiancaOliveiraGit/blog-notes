import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import HtmlNoteConverter from '../service/converter-service';

// TODO ---
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
  addTag:string;
  addCode: string;
  selectedFile: any;
  imageTag: any;
  imageData: string;
  imageAlt: string;
  reader: FileReader;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() addTagEvent = new EventEmitter<string>();


  constructor() { 
    this.newFormHtml = "";
    this.addHeading = "Note Heading";
    this.addNote = "add your note here...";
    this.addList = "";
    this.addListArray = [];
    this.addTag = "";
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

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    let link = window.URL.createObjectURL(this.selectedFile);
    this.imageTag.src = link;
    this.imageTag.style.display = "block";
    // convert to base64
    this.reader.readAsDataURL(this.selectedFile);
  }

  fileInput(){
   /* this function is used for the file directory modal*/
  }

  removeFile() {
    this.imageTag.style.display = "none";
    this.selectedFile = null;
  }
 
  convertToHtml(){
    // get image data
    let imageBase64:string = '';
    if(this.selectedFile !== null) {
      let name = ((this.selectedFile.name) as string);
      this.imageAlt = name.substr(0, name.length - 4);
      imageBase64 = this.imageData;
    };

    if(this.addList.length > 0) 
      this.addListArray = this.addList.split(',');

    // convert to html string
    this.newFormHtml = HtmlNoteConverter(this.addHeading, this.addNote, this.addListArray, this.addCode, imageBase64, this.imageAlt);
  }

  closeForm(save:boolean) {
    if(!save)
    this.addNewItem('');
    
     // convert to object
     this.convertToHtml();
     this.addTagEvent.emit(this.addTag);
     this.addNewItem(this.newFormHtml);
  }
}
