import React, { useState, useEffect } from "react";
import UserLayout from "./user-layout";
import API from './api';
import withSpinner from './withSpinner';
let articleRef = React.createRef();
import { MAP_HEIGHT } from './MosquiteerEnum';

function ArticleData (props) {
  const [data, setData] = useState({ items: [] });
  useEffect(() => {
    articleRef.current.style.height = `${window.innerHeight - MAP_HEIGHT}px`;

    // Update the document title using the browser API
    let spinner = props.startSpinner(articleRef.current);
    fetch(
      API.getRSSFeed
    ).then(res =>
      res.json()
    ).then(data => {
      spinner.stop();
      setData(data)
    });
  }, []);

  return (
    <UserLayout>
      <div className="rows article-data" ref={articleRef}>
        {data && data.items.map(item => (
          <div className="panel panel-articles">
            <a href={item.link}>{item.title}</a>
            <div> {item.pubDate}</div>
          </div>
        ))}
      </div>
    </UserLayout>
  );
}
export default withSpinner(ArticleData);
