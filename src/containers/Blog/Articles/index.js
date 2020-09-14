import React from "react";
import Articles from "../../../components/Blog/Articles";
import Query from "../../../components/Blog/Query";
import ARTICLES_QUERY from "../../../queries/Blog/article/articles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Linden Ustawi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
