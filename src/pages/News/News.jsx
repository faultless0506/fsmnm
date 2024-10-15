import React from "react";
import Post from "../../components/Post/Post";

import "./News.css";

const newsData = [
  {
    title: "Новость 1",
    date: "01.01.2022",
    desc: "Текст новости 1",
    image: "/public/img/bg_knifes_box_1_norm.png",
    text: "Полный Текст новости 1"
  },
  {
    title: "Новость 2",
    date: "01.01.2022",
    desc: "Текст новости 2 inominus inomina sdkannksdnladkwdabkjsdbjkbdkwab   jkasbdbkajbsdnjkasbdkjasbj jbkaskdjbsjkdabjdwwkjbs kjabsddnaksjldnk.awndk.j.aw",
    image: "/public/img/post_img_300x200.png",
    text: "Полный Текст новости 2"
  },
  {
    title: "Новость 3",
    date: "01.01.2022",
    desc: "Текст новости 3",
    image: "/public/img/post_img_300x200.png",
    text: "Полный Текст новости 3"
  },
  {
    title: "Новость 4",
    date: "01.01.2022",
    desc: "Текст новости 4",
    image: "/public/img/post_img_300x200.png",
    text: "Полный Текст новости 4"
  },
  {
    title: "Новость 5",
    date: "01.01.2022",
    desc: "Текст новости 5",
    image: "/public/img/post_img_300x200.png",
    text: "Полный Текст новости 5"
  },
];

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
