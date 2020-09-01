import React from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Topics extends React.Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <main>
        <h3>NC News Topics</h3>
        <ul>
          {topics.map((topic) => {
            return (
              <li>
                <Link to={`/articles/topics/${topic.slug}`}>
                  <h4>{topic.slug}</h4>
                </Link>
                <p>Description: {topic.description}</p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Topics;
