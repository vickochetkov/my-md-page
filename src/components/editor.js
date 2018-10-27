import React, { Component } from 'react';
import Previewer from './previewer';
import initialText from './initial-text'

export default class Editor extends Component {
  state = {
    input: initialText,
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value });
  }

  onClickSample = () => {
    this.setState({ input: initialText });
  }

  onClickHandle = () => {
    this.setState({ input: '' });
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
              onChange={this.handleChange}>
            </textarea>
          </form>
          <button
            className="btn btn-success"
            onClick={this.onClickSample}
          >Sample</button>
          <button
            className="btn btn-info"
            onClick={this.onClickHandle}
          >Clear</button>
        </div>
        <div className="col" >
          <Previewer text={input} />
        </div>
      </div>
    );
  }

}
