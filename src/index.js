import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ObserverEditor from "./components/editor/editor";
import ObserverPreviewer from "./components/previewer/previewer";
import { observer } from "mobx-react";

import { store } from "./store";

class MarkdownPreviewer extends React.Component {
  render(){
    return <div className={this.props.store.layoutClass}>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>
    <ObserverEditor store={store}/>
    <ObserverPreviewer store={store}/>
  </div>
  }
}

const ObserverMarkdownPreviewer = observer(MarkdownPreviewer);


ReactDOM.render(
  <React.StrictMode>
      <ObserverMarkdownPreviewer store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
