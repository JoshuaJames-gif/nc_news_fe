import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";

class App extends Component {
  state = {
    user: "tickle122",
  };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <p>user:{user}</p>
        <button onClick={()=>{this.setState({user: null})}}>logout</button>
        <Router>
          <HomePage path="/" />
          <AllArticles path="/articles" />
          <AllArticles path="/articles/:sort_by" />
          <AllArticles path="/articles/topics/:topic_slug" />
          <Topics path="/topics" />
          <SingleArticle path="/article/:article_id" user={user} />
        </Router>
      </div>
    );
  }
}

export default App;
