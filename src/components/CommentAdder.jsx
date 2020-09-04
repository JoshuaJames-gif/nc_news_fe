import React, { Component } from "react";
import * as api from '../utils/api'

class CommentAdder extends Component {
  state = {
    commentInput: "",
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="commentInput">
          Comment:
        </label>
        <input onChange={this.handleChange} type="text" id="commentInput" name="commentInput" />
        <button type='submit'>Submit</button>
      </form>
    );
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { commentInput } = this.state;
    api.postComment(commentInput, this.props.user, this.props.article_id).then((comment) => {
      this.props.addComment(comment)
    })
  };
}

export default CommentAdder;
