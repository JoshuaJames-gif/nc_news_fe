import React from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router"

class AllArticles extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    api.getAllArticles(this.props.topic_slug).then((articles) => {
      console.log("didMount", articles);
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <main>
        <h3>NC News Articles:</h3>
        <ul>
          {articles.map((article) => {
            return (
              <li>
                <Link to={`/article/${article.article_id}`}>
                <h4>{article.title}</h4>
                
                </Link>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Votes: {article.votes}</p>
                <p>Date Created: {article.created_at}</p>
                <p>Comments: {article.comment_count}</p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default AllArticles;
