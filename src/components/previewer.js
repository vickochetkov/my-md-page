import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  MarkdownPreview  } from 'react-marked-markdown';

export default class Previewer extends Component {
  // console.log({text});
  render() {
    const { text } = this.props;
    return (
      <div id="preview" >
        <MarkdownPreview
        value={ text }
        markedOptions={{
          breaks: true,
          smartypants: true,
          tables: true,
          langPrefix: 'langClass',
          highlight: function(code) {
            return require('highlight.js').highlightAuto(code).value;
          }
        }}
        />
      </div>
    )
  }
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired,
}
