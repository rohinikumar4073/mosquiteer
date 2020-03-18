import React, { useState } from "react";
import UserLayout from "./user-layout";
import API from './api'
export default function ArticleData () {
  const [data, setData] = useState({items: []});
  fetch(
    API.getRSSFeed
  ).then(res =>
    res.json()
  ).then(data => {
    setData(data)
  });
  return (
    <UserLayout>
      <div className="rows">
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
