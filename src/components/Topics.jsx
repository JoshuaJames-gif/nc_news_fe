import React from "react";
import * as api from "../utils/api";

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
            return(
              <li>
                <h4>{topic.slug}</h4>
            <p>Description: {topic.description}</p>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}

export default Topics;
