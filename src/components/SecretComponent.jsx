// components/SecretComponent.js
import React from 'react';

const SecretComponent = ({ secretProp }) => {
  // Students need to inspect props in React DevTools
  // to find the value of secretProp: "BUGS!"
  
  return (
    <div>
      <p>React DevTools might reveal component secrets...</p>
      <small className="hint-text">
        Hint: Check this component's props!
      </small>
    </div>
  );
};

export default SecretComponent;