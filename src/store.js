import { observable, decorate, computed } from "mobx";
import marked from "marked";

const EDITOR_NORMAL = "editor-normal";
const EDITOR_EXPANDED = "editor-expanded";
const EDITOR_SHRUNK = "editor-shrunk";
const PREVIEW_NORMAL = "preview-normal";
const PREVIEW_EXPANDED = "preview-expanded";
const PREVIEW_SHRUNK = "preview-shrunk";
const LAYOUT_NORMAL = "component-holder";
const LAYOUT_SWITCHED = "component-holder-switched";
const EDITOR_SWITCHED = "editor-switched";
const PREVIEW_SWITCHED = "preview-switched";

export const START_PHRASE = "# This is a title \n * test \n * test \n ## This is a subtitle \n Made by [Loosetooth](https://github.com/Loosetooth) \n \n `<div></div>` \n \n\
```\
// this is multi-line code:\n\
    \n\
    function anotherExample(firstLine, lastLine) {\n\
      if (firstLine == '```' && lastLine == '```') {\n\
        return multiLineCode;\n\
      }\n\
    }\n\
```\n\n\
> Block Quotes!\n\n\
**Bold text!**\n\n\
![React Logo w/ Text](https://goo.gl/Umyytc)";

class Store {
    input = START_PHRASE;
    previewExpanded = false;
    editorExpanded = false;
    switched = false;
    get myHtml() {return marked(this.input);}
    get editorClass(){
        return  this.editorExpanded ? EDITOR_EXPANDED : 
                this.previewExpanded ? EDITOR_SHRUNK : 
                this.switched ? EDITOR_SWITCHED : EDITOR_NORMAL;
    }
    get previewClass(){
        return  this.previewExpanded ? PREVIEW_EXPANDED : 
                this.editorExpanded ? PREVIEW_SHRUNK : 
                this.switched ? PREVIEW_SWITCHED : PREVIEW_NORMAL;
    }
    get layoutClass(){
        return this.switched ? LAYOUT_SWITCHED : LAYOUT_NORMAL;
    }
}

decorate(Store,{
    input: observable,
    previewExpanded: observable,
    editorExpanded: observable,
    switched: observable,
    myHtml: computed,
    editorClass: computed,
    previewClass: computed,
    layoutClass: computed,
});

export const store = new Store();
