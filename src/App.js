import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";
import Topics from './components/Topics'
import SingleArticle from './components/SingleArticle'


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <AllArticles path="/articles" />
        <AllArticles path="/articles/:sort_by" />
        <AllArticles path="/articles/topics/:topic_slug" />
        <Topics path='/topics'/>
        <SingleArticle path='/article/:article_id'/>
      </Router>
    </div>
  );
}

export default App;
