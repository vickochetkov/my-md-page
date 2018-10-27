import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {  MarkdownPreview  } from 'react-marked-markdown';
import marked from 'marked'

export default class Previewer extends Component {


  mdText({text}) {
    var markup = marked(text,
      {
        sanitize: true,
        breaks: true,
        tables: true
      });
    return { __html: markup };
  }

  // console.log({text});
  render() {
    const { text } = this.props;
    return (
      <div id="preview" dangerouslySetInnerHTML={this.mdText({ text })} />
    )

    // (
    //   <div id="preview" >
    //     <MarkdownPreview
    //     value={ text }
    //     markedOptions={{
    //       breaks: true,
    //       smartypants: true,
    //       tables: true,
    //       langPrefix: 'langClass',
    //       highlight: function(code) {
    //         return require('highlight.js').highlightAuto(code).value;
    //       }
    //     }}
    //     />
    //   </div>
    // )
  }
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired,
}
