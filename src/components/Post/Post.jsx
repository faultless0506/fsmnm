import React from "react";
import "./Post.css";

export default function Post({ title, date, desc, text, image }) {
  return (
    <div className="post">
      <img src={image} alt="post" />
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{desc}</p>
    </div>
  );
}
