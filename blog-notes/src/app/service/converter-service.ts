
    

    const HtmlNoteConvert = (title:string, note:string, list:string[], codes:string, imageDataVal:string, imageAltVal:string) => {
        let returnHtml = '';
        // title
        const templateTitle = '<div class="w3-container"> <h3>TitleHeader</h3>';
        const templateNote = '<p>Note</p>';
        const titleHeader = templateTitle.replace('TitleHeader', title);
        const noteDiv = templateNote.replace('Note', note);
        
        returnHtml = titleHeader + noteDiv;

        // list
        if(list.length > 0) {
            const templateListBegin = '<p><ul style="list-style-type: square;">Take Note:';
            const templateListItem = '<li>ListItem</li>';
            const templateListEnd =   '</ul></p>';

            let fullList = list.map(i => {
                let item = templateListItem.replace('ListItem', i);
                return item;
            }).join(' ');
            returnHtml += templateListBegin + fullList + templateListEnd;
        }

        //code
        if(codes !== '') {
            const templateCodeBegin = '<p>Code Example:<pre><code>';
            const templateCodeItem = 'CodeExampleNote';
            const templateCodeEnd =  '</code></pre></p>';
            
            returnHtml += templateCodeBegin + templateCodeItem.replace('CodeExampleNote', codes) + templateCodeEnd;
        }
  
        //image
        if(imageAltVal !== '') {
            const imageBegin = '<img src="';
            let imageAlt = '" alt="ImageAlt" style=" width:100%;">';
           
            returnHtml += imageBegin + imageDataVal + imageAlt.replace('ImageAlt', imageAltVal);
        }
        const templateEnd = '</div><hr>';
        returnHtml += templateEnd;

        return returnHtml;
    }
export default HtmlNoteConvert;


import { saveAs } from 'file-saver';  
export const HtmlTemplateConvert = async (notes:string[], titleFileName:string, tags:string[], nowDate:string) => {
    
    const templateFilePath = '../.././assets/final-page-template.html';
    // Fetch the template
    let response = await fetch(templateFilePath);
    let template = await response.text(); // read response body as text

    // replace data
    const noteData = notes.join('');
    let templateNotes = template.replace('#INSERT-NOTE-ARRAY', noteData);
    // tags forLoop to create span 
    if(tags.length > 0) {
        let spanTags = '';
        const span = '<span class="w3-tag w3-light-grey w3-small w3-margin-bottom">#INSERTTAG</span>'
        tags.forEach(t => {
            spanTags += span.replace('#INSERTTAG', '#' + t);
        });
        templateNotes = templateNotes.replace('#INSERT-TAGS', spanTags);
    }else {
        templateNotes = templateNotes.replace('#INSERT-TAGS', '');
    }

     // saves to documents folder
    let file = new File([templateNotes], titleFileName + '_' + nowDate + '.html', {type: "text/plain;charset=utf-8"});
    saveAs(file);
 

   



   
}
