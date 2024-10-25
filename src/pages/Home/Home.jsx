import React from "react";
import newsData from "../../data/news";
import competitionsData from "../../data/competitions";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  const posts = newsData;
  const competitions = competitionsData;
  return (
    <div className="content">
      <div className="container content__main home">
        <div className="home__content">
          
          <div className="home__news">
            <Link to="/news">
              <h2>Новости</h2>
            </Link>
            <Carousel>
              {posts.map((post, index) => (
                <div key={index} className={`carousel__item`}>
                  {" "}
                  <img src={post.image} alt="post" />
                  <span>{post.date}</span>
                  <h3>{post.title}</h3>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="home__competitions">
            <Link to="/competitions">
              <h2>Соревнования</h2>
            </Link>
            <Carousel>
              {competitions.map((post, index) => (
                <div key={index} className={`carousel__item`}>
                  {" "}
                  <img src={post.image} alt="competition" />
                  <span>{post.date}</span>
                  <h3>{post.title}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
