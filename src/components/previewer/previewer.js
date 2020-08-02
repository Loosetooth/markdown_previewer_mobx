import React, {Component} from 'react';
import './previewer.scss'
import { Title } from "../title/title";

import { observer } from "mobx-react";

class Previewer extends Component {
    constructor(props){
      super(props);
      this.expand = this.expand.bind(this);
      this.switch = this.switch.bind(this);
    }
    expand(){
      this.props.store.previewExpanded = !this.props.store.previewExpanded;
    }
    switch(){
      this.props.store.switched = !this.props.store.switched;
    }
    render() {
      if(!this.props.store.editorExpanded){
        return <div className={this.props.store.previewClass}>
          <Title title="Markdown Preview" onExpandClick={this.expand} onSwitchClick={this.switch}/>
          <div id="previewer" className="markdown-visualization" dangerouslySetInnerHTML={{__html: this.props.store.myHtml}}>
          </div>
        </div>;
      } else {
        return "";
      }
    }
  }

const ObserverPreviewer = observer(Previewer);
export default ObserverPreviewer;