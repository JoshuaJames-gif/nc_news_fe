import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Router } from "@reach/router";
import AllArticles from "./components/AllArticles";
import Topics from './components/Topics'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <AllArticles path="/articles" />
        <Topics path='/topics'/>
      </Router>
    </div>
  );
}

export default App;
