import React, {Component} from 'react';
import './title.scss'

export class Title extends Component {
    render() {
      return <div className="title">
      <p className="title-name">{this.props.title}</p>
      <div className="button-holder">
        <button className="title-button" onClick={this.props.onSwitchClick}>
          <i class="fas fa-arrows-alt-h"></i>
        </button>
        <button onClick={this.props.onExpandClick} className="title-button" >
          <i class="fas fa-expand-arrows-alt"/>
        </button>
      </div>
    </div>;
    }
  }