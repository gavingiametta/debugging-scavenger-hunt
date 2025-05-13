// components/MissionBrief.js
import React from 'react';

const MissionBrief = () => {
  return (
    <div className="card">
      <h2>Mission Briefing</h2>
      <p>Find 8 hidden clues using your browser's DevTools!</p>
      <p>Tools you'll need:</p>
      <ul>
        <li>Console (F12)</li>
        <li>Elements Inspector</li>
        <li>React Developer Tools</li>
        <li>Network Tab</li>
      </ul>
    </div>
  );
};

export default MissionBrief;