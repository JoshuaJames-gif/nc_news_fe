import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <h3>This is Nav bar</h3>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to='/topics'>
        <button>Topics</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <button>Add Article</button>
    </nav>
  );
};

export default Nav;
