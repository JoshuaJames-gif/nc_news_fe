import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import Voter from "./Voter";

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
        <p>Date Created: {article.created_at}</p>
        <p>{article.body}</p>
        {this.props.user?<Voter
          id={article.article_id}
          votes={article.votes}
          type={"articles"}
        />: <p>Login to Vote</p>}
        <p>Comments</p>{" "}
        <Comments article_id={this.props.article_id} votes={article.votes}  user={this.props.user}/>
      </>
    );
  }
}

export default SingleArticle;
