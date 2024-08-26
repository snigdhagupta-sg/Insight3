import React from "react";
import "./card.css";
import image from "../assets/main_news.png";
class Card extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "17.5rem" }}>
        <img
          src={image}
          className="card-img-top"
          alt="Hell-o"
          width="200px"
          height="100px"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.google.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
