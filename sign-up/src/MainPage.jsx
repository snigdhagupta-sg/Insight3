import React from 'react';
import Navbar from './Navbar.jsx';
import BlueHeader from './BlueHeader.jsx';
import BannerTrending from './BannerTrending.jsx';
import TrendingTopics from './TrendingTopics.jsx';
import Footer from './Footer.jsx';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <BlueHeader />
      <BannerTrending />
      <TrendingTopics />
      <Footer />
    </>
  );
};

export default MainPage;
