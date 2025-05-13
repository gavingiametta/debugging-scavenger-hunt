// components/ClueArea5.js
import React from 'react';

const ClueArea5 = () => {
  const handleError = () => {
    try {
      // This will cause an error
      const result = undefined.someProperty.nested;
      console.log(result); // This line won't execute
    } catch (error) {
      console.error("❌ Error caught! But here's clue #7: 'FINDING'");
    }
  };
  
  return (
    <div className="card card-error">
      <h3>Clue Area 5: Error Investigation</h3>
      <button className="button" onClick={handleError}>
        Trigger Error
      </button>
      <p className="hint-text">Errors can be helpful too...</p>
      {/* CLUE 7: Click button and check console errors */}
    </div>
  );
};

export default ClueArea5;