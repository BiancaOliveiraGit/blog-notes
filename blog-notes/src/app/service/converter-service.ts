
   
    const HtmlTemplateConvert = (title:string, note:string, list:string[], codes:string, imageDataVal:string, imageAltVal:string) => {
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
export default HtmlTemplateConvert;