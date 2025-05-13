// components/PasswordSubmit.js
import React from 'react';

const PasswordSubmit = ({ password, setPassword, onSubmit, attempts }) => {
  return (
    <div className="card">
      <h3>Enter the Password</h3>
      <p>Combine all 8 clues in order:</p>
      <input 
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password..."
        className="input"
      />
      <button 
        className="submit-button"
        onClick={onSubmit}
      >
        Submit Password
      </button>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default PasswordSubmit;