import React from "react";
import axios from "axios";
import "./carousel.css";
import background from "../assets/image.png"
class Carousel_Business extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const apiKey = 'b929635597d340e2bf7ba9206939d6e7';
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        const shuffledArticles = response.data.articles.sort(() => 0.5 - Math.random());
      const selectedArticles = shuffledArticles.slice(0, 3);
      this.setState({ articles: selectedArticles });
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });
  }

  render() {
    const { articles } = this.state;

    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {articles.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={background}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5><a href = {article.url}>{article.title}</a></h5>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel_Business;
