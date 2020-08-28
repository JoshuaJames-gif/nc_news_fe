import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <h3>This is Nav bar</h3>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Topics</button>
      <Link to='/articles'>
        <button>Articles</button>
      </Link>
      <button>Add Article</button>
    </nav>
  );
};

export default Nav;
