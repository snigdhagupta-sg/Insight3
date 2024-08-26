import React from 'react';
import './BannerTrending.css'; // Import the corresponding CSS file

const BannerTrending = () => {
  // Sample trending topics data
  const trendingTopics = [
    { id: 1, title: 'Global Markets Rally Amid Economic Optimism', link: '/article1' },
    { id: 2, title: 'Breakthrough in Renewable Energy Technology', link: '/article2' },
    { id: 3, title: 'Major Advances in AI and Machine Learning', link: '/article3' },
    { id: 4, title: 'Health Experts Release New Wellness Guidelines', link: '/article4' },
  ];

  return (
    <div className="banner-trending-container">
      <div className="banner-image">
        <img alt="News Banner" />
      </div>
      <div className="trending-section">
        <h2>Trending</h2>
        <ul>
          {trendingTopics.map(topic => (
            <li key={topic.id}>
              <a href={topic.link}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BannerTrending;
