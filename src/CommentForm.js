import React, { Component } from 'react';
import CommentCard from './CommentCard';
import './CommentForm.css';


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', comments: []}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.text);
    this.state.comments.push(this.state.text);
  }
  render() {
    let comment = this.state.comments;
    const words = comment.map((cmt)=>
      <p>{cmt}</p>
    );
    return(
      <div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea className="text-input" value={this.state.value} onChange={this.handleChange} placeholder="Comment: " />
          <input className="submit-button" type="submit" value="Comment" />
        </form>
        <div>
          <CommentCard key={words.id} text={words}/>
        </div>
      </div>
    );
  }
}

export default CommentForm;
//<input placeholder="Name: " ref={(input) => this._author = input}/>
