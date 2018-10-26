import React, { Component } from 'react';
import Previewer from './previewer';
import initialText from './initial-text'

export default class Editor extends Component {
  state = {
    input: initialText,
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value })
  }

  render() {
    const { input } = this.state;

    return (
      <div className="row">
        <div className="col">
          <form className="editor" id="editor">
          <textarea
          value={this.state.input}
          type="text"
          // placeholder="text here"
          onChange={this.handleChange}></textarea>
          </form>
        </div>
        <div className="col" >
          <Previewer text={input} />
        </div>
      </div>
    );
  }

}
