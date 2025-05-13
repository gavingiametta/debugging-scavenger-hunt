// components/ClueArea4.js
import React from 'react';

const ClueArea4 = () => {
  const handleApiCall = () => {
    // Simulate API call
    console.group('Fake API Request');
    console.log('Fetching data from /api/secrets...');
    console.log('Response:', { 
      status: 200, 
      data: { clue: "FOR" },
      message: "Clue #6 found in the response data!" 
    });
    console.groupEnd();
  };
  
  return (
    <div className="card card-api">
      <h3>Clue Area 4: API Secrets</h3>
      <button className="button" onClick={handleApiCall}>
        Make API Call
      </button>
      <p className="hint-text">Check the console after clicking...</p>
      {/* CLUE 6: Click button and expand console group */}
    </div>
  );
};

export default ClueArea4;