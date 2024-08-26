import React from "react";
import "./BlueHeader.css"; 

const BlueHeader = () => {
  return (
    <div className="blue-header">
      <ul className="header-links">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Business">Business</a>
        </li>
        <li>
          <a href="/Technology">Tech</a>
        </li>
        <li>
          <a href="/Science">Science</a>
        </li>
        <li>
          <a href="/Health">Health</a>
        </li>
        <li>
          <a href="/Sports">Sports</a>
        </li>
        <li>
          <a href="/Entertainment">Entertainment</a>
        </li>
      </ul>
    </div>
  );
};

export default BlueHeader;
