import React, { Component } from "react";
import * as api from "../utils/api";

class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    console.log(this.props)
    api.getComments(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p>Author: {comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <p>Date Created: {comment.created_at}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

// 
// "comment_id": 44,
//   "body": "Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non.",
//     "votes": 4,
//       "created_at": "2017-11-20T08:58:48.322Z",
//         "article_id": 1,
//           "author": "grumpy19"

export default Comments;
