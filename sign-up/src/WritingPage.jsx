import React, { useState } from 'react';
import Header from './Header2';
import './WritingPage.css';
import robo from '../src/assets/robo.png';

const WritingPage = () => {
  const [showInputBoxes, setShowInputBoxes] = useState(false);

  const handleCheckClick = () => {
    setShowInputBoxes(true);
  };

  return (
    <div className="writing-page">
      <Header /> {/* Include the Header component */}
      <main className="main-content">
        <div className="image-container">
          <img src={robo} alt="Robot" />
        </div>
        <div className="text-area-container">
          <h2>Start Writing</h2>
          <textarea
            className="text-input"
            placeholder="Start writing here..."
          ></textarea>
        </div>
      </main>
      <footer className="footer">
        <button className="submit-button">Submit</button>
        <button className="submit-button" onClick={handleCheckClick}>Check</button>
        </footer>
        {/* Suggestions and Grammar Check Input Boxes */}
        {showInputBoxes && (
          <div className="input-area">
            <div className="input-boxes">
              <input
                type="text"
                className="suggestion-input"
                placeholder="Suggestions..."
              />
              <input
                type="text"
                className="grammar-check-input"
                placeholder="Grammar Check..."
              />
            </div>
            <div className="image-container-lower">
             
            </div>
          </div>
        )}
    
    </div>
  );
};
export default WritingPage;
