import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import BlogApp from "./containers/Blog/BlogApp";
import App from "./Mainapp";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      {/* <BlogApp /> */}
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
