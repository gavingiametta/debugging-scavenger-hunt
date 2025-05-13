// components/ClueArea3.js
import React, { useState } from 'react';

const ClueArea3 = () => {
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (clickCount === 0) {
      console.warn("🔥 Button clicked! Here's clue #5: 'AWESOME'");
    }
  };
  
  return (
    <div className="card card-interactive">
      <h3>Clue Area 3: Interactive Elements</h3>
      <button className="button" onClick={handleClick}>
        Click me for a clue!
      </button>
      <p>Clicks: {clickCount}</p>
      {/* CLUE 5: Click the button and check console */}
    </div>
  );
};

export default ClueArea3;