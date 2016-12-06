import React, { Component } from 'react';
import CommentForm from './CommentForm';
import './CommentBox.css';

class CommentBox extends Component {

  render() {
    return (
      <div className="comment-box">
        <div className="main-frame">
          <div className="top-line">
            <h2>{this.props.greeting}</h2>
          </div>
          <div className="input-section">
            <CommentForm />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;
