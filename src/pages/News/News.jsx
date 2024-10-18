import React from "react";
import Post from "../../components/Post/Post";
import newsData from "../../data/news";
import "./News.css";


export default function News() {
  
  return (
    <div className="content">
      <div className="content__top">
        <h1>Новости</h1>
      </div>
      <div className="content__main news">
        {newsData.map((post, index) => (
          <Post
            key={index}
            image={post.image}
            title={post.title}
            date={post.date}
            desc={post.desc}
          />
        ))}
      </div>
    </div>
  );
}
