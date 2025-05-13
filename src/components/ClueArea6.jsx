// components/ClueArea6.js
import React from 'react';
import SecretComponent from './SecretComponent';

const ClueArea6 = () => {
  return (
    <div className="card card-secret">
      <h3>Clue Area 6: Component Investigation</h3>
      <SecretComponent secretProp="BUGS!" />
      {/* CLUE 8: Use React DevTools to check SecretComponent props */}
    </div>
  );
};

export default ClueArea6;