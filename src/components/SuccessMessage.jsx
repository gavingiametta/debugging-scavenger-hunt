// components/SuccessMessage.js
import React from 'react';

const SuccessMessage = ({ attempts }) => {
  return (
    <div className="success-message">
      <h2>🎉 Congratulations! 🎉</h2>
      <p>You've mastered the debugging tools!</p>
      <p>Final attempts: {attempts}</p>
    </div>
  );
};

export default SuccessMessage;