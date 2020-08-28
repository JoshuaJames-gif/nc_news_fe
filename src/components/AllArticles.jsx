import React from "react";
import * as api from "../utils/api";

class AllArticles extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    api.getAllArticles().then((articles) => {
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
                <h4>{article.title}</h4>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
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
