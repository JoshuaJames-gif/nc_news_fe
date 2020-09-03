import React, { Component } from "react";

class CommentAdder extends Component {
  state = {
    commentInput: "",
  };
  render() {
    return (
      <form>
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
}

export default CommentAdder;
