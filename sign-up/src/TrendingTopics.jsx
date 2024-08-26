import React from 'react';
import './TrendingTopics.css'; // Import the corresponding CSS file

const TrendingTopics = () => {
  // Sample trending topics data
  const trendingTopics = [
    { id: 1, title: 'Global Markets Rally Amid Economic Optimism', link: '/article1' },
    { id: 2, title: 'Breakthrough in Renewable Energy Technology', link: '/article2' },
    { id: 3, title: 'Major Advances in AI and Machine Learning', link: '/article3' },
    { id: 4, title: 'Health Experts Release New Wellness Guidelines', link: '/article4' },
    { id: 5, title: 'Space Exploration Reaches New Heights', link: '/article5' },
  ];

  return (
    <div className="trending-topics">
      <h2>Trending Topics</h2>
      <ul>
        {trendingTopics.map(topic => (
          <li key={topic.id}>
            <a href={topic.link}>{topic.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
