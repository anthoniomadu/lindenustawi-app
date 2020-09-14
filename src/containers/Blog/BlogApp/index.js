import React from "react";

import { Switch, Route } from "react-router-dom";

// import Nav from "../../../components/Blog/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import "./nav.css";

function BlogApp() {
  return (
    <div className="App">
    {/* <div className="blognav">
      <Nav />
    </div> */}
      <Switch>
        <Route path="/blog" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default BlogApp;
