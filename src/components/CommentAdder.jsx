import React, { Component } from "react";
import * as api from '../utils/api'

class CommentAdder extends Component {
  state = {
    commentInput: "",
  };
  render() {
    return (
      <form onSubmit>
        <label onChange={this.handleChange} htmlFor="commentInput">
          Comment:
        </label>
        <input type="text" id="commentInput" name="commentInput" />
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
    api.postComment(commentInput).then((comment) => {
      this.props.addComment(comment)
    })
  };
}

export default CommentAdder;
