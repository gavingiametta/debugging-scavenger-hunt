// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import MissionBrief from './components/MissionBrief';
import ClueArea1 from './components/ClueArea1';
import ClueArea2 from './components/ClueArea2';
import ClueArea3 from './components/ClueArea3';
import ClueArea4 from './components/ClueArea4';
import ClueArea5 from './components/ClueArea5';
import ClueArea6 from './components/ClueArea6';
import PasswordSubmit from './components/PasswordSubmit';
import SuccessMessage from './components/SuccessMessage';
import { setupGlobalClues } from './utils/clueSetup';
import './App.css';

function getEncodedString(x){
  let toReturn = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!.?1234567890";

  for (let i = 0; i < x.length; i++) {
    toReturn = toReturn + "|" + String(alphabet.indexOf(x[i]));
  }

  return toReturn;
}
  

function App() {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Setup global clues on component mount
  React.useEffect(() => {
    setupGlobalClues();
  }, []);
  
  const handlePasswordSubmit = () => {
    setAttempts(attempts + 1);
    const correct = "|43|30|26|28|45|29|30|47|45|40|40|37|44|26|43|30|26|48|30|44|40|38|30|31|40|43|31|34|39|29|34|39|32|27|46|32|44|52";
    
    if (getEncodedString(password.toUpperCase().replace(/\s/g, '')) === correct) {
      setShowSuccess(true);
    } else {
      alert(`Not quite! Attempt #${attempts + 1}. Keep hunting! 
      \nHint: Make sure you found all 8 clues and combined them in order.`);
    }
  };
  
  return (
    <div className="app">
      <Header />
      <MissionBrief />
      
      {/* CLUE 2: The second piece of the password is: 'DEVTOOLS' */}
      
      <ClueArea1 />
      <ClueArea2 />
      <ClueArea3 attempts={attempts} />
      <ClueArea4 />
      <ClueArea5 />
      <ClueArea6 />
      
      <PasswordSubmit 
        password={password}
        setPassword={setPassword}
        onSubmit={handlePasswordSubmit}
        attempts={attempts}
      />
      
      {showSuccess && <SuccessMessage attempts={attempts} />}
      
      {/* Hidden helper for stuck students */}
      <div 
        style={{ display: 'none' }} 
        data-hint="Check console, comments, attributes, CSS, buttons, and React DevTools"
      >
        Emergency hint system
      </div>
    </div>
  );
}

export default App;