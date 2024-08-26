import React from "react";
import Navbar from "./Navbar.jsx";
import BlueHeader from "./BlueHeader.jsx";
import Carousel_Home from "./components/carousel_home.jsx"
import Card from "./components/card.jsx";
import Footer from "./Footer.jsx";
import "./Home.css";

function Home() {
  const numCards = 60;
  return (
    <>
      <Navbar />
      <BlueHeader />
      <Carousel_Home />
      <div className="card-grid">
        {Array.from({ length: numCards }, (_, index) => (
          <Card key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
