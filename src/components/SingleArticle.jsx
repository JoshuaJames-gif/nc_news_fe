import React, { Component } from "react";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article });
    });
  }
 

  render() {
    console.log(this.props);
    const { article } = this.state;
    return (
      <>
        <h3>{article.title}</h3>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Date Created: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
      </>
    );
  }
}

export default SingleArticle;
