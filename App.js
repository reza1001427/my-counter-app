import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. State for the Like Button
  const [likeCount, setLikeCount] = useState(0);

  // 2. State for the Dislike Button
  const [dislikeCount, setDislikeCount] = useState(0);

  // 3. State for the Random (Star) Button
  const [starCount, setStarCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Button Counter App</h1>
      
      <div className="buttons-wrapper">
        
        {/* First Button: LIKE */}
        <div className="counter-card">
          <button 
            className="btn like-btn" 
            onClick={() => setLikeCount(likeCount + 1)}
          >
            Like 👍
          </button>
          <p className="count-display">Count: {likeCount}</p>
        </div>

        {/* Second Button: DISLIKE */}
        <div className="counter-card">
          <button 
            className="btn dislike-btn" 
            onClick={() => setDislikeCount(dislikeCount + 1)}
          >
            Dislike 👎
          </button>
          <p className="count-display">Count: {dislikeCount}</p>
        </div>

        {/* Third Button: RANDOM (Star) */}
        <div className="counter-card">
          <button 
            className="btn random-btn" 
            onClick={() => setStarCount(starCount + 1)}
          >
            Star 🌟
          </button>
          <p className="count-display">Count: {starCount}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
