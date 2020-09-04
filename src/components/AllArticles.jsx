import React from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class AllArticles extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    isLoading: true,
  };
  componentDidMount() {
    this.getArticles(this.state.sort_by, this.props.topic_slug);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles(this.state.sort_by, this.props.topic_slug);
    }
  }

  getArticles(sort, topic) {
    this.setState({ isLoading: true });
    api.getAllArticles(sort, topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }
  handleChange = (event) => {
    const {value} = event.target
    this.setState({sort_by: value})
  }

  render() {
    const { articles, isLoading } = this.state;
    // if(isLoading)
    return (
      <main>
        <select onChange={this.handleChange} name="dropdown" id="dropdown">
          <option value="votes">votes</option>
          <option value="created_at">date</option>
          <option value="comment_count">comment count</option>
        </select>
        {/* <section>
          <button onClick={() => this.getArticles("votes")}>votes</button>
          <button onClick={() => this.getArticles("created_at")}>
            date created
          </button>
          <button onClick={() => this.getArticles("comment_count")}>
            comment count
          </button>
        </section> */}
        <h3>NC News Articles:</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {articles.map((article) => {
              return (
                <li key={article.article_id}>
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
        )}
      </main>
    );
  }
}

export default AllArticles;
