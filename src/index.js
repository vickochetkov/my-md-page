import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/editor';
import './index.css';
import './App.scss';

function MyMDpage() {
  return (
    <div className="frame shadow-lg rounded">
      <div className="text-lg-center">
          <h1>My React MD Page</h1><hr/>
      </div>
      <Editor />
    </div>

  )
}

ReactDOM.render(<MyMDpage />, document.querySelector('#root'));
