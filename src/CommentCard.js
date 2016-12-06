import React, { Component } from 'react';
import './CommentCard.css';


export default class CommentCard extends Component {

  render() {
    return (
      <div className="comment-card">
        <div className="comment-text">
          {this.props.text}
        </div>
      </div>
    );
  }
};
