import React, {Component} from 'react';
import './editor.scss'
import { Title } from "../title/title";
import {observer} from "mobx-react";
import { START_PHRASE } from "../../store";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.expand = this.expand.bind(this);
        this.switch = this.switch.bind(this);
    }
    expand(){
        this.props.store.editorExpanded = !this.props.store.editorExpanded;
    }
    switch(){
        this.props.store.switched = !this.props.store.switched;
    }
    handleChange(event){
        this.props.store.input = event.target.value;
    }
    render() {
        if(!this.props.store.previewExpanded){
            return <div className={this.props.store.editorClass}>
            <Title title="Markdown Editor" onExpandClick={this.expand} onSwitchClick={this.switch}/>
            <textarea onChange={this.handleChange} className="text-area" id="editor">{START_PHRASE}</textarea>
            </div>;
        } else {
            return "";
        }
    }
  }

const ObserverEditor = observer(Editor);
export default ObserverEditor;