// utils/clueSetup.js
export const setupGlobalClues = () => {
    // CLUE 1: Console message
    console.log("🔍 Welcome Detective! Your first clue is: 'REACT'");
    
    // BONUS: Add clue to window object
    window.BONUS_CLUE = "Great job finding this! This isn't part of the main password, but you're thinking like a true debugger!";
    
    // Add some decoy data to make it more challenging
    window.DEBUG_DATA = {
      status: "active",
      level: 42,
      secret: "red herring"
    };
    
    // Set up a console table that might be discovered
    console.table({
      hint: "Use all the tools!",
      difficulty: "medium",
      totalClues: 8
    });
  };
  
  export const PASSWORD_CONFIG = {
    correct: "REACTDEVTOOLSAREAWESOMEFORFINDINGBUGS!",
    maxAttempts: 10,
    hints: [
      "Check the console first",
      "Inspect HTML elements",
      "Look at component props", 
      "CSS can hide things",
      "Buttons trigger events",
      "Check network/API calls",
      "Errors are clues too",
      "React DevTools is powerful"
    ]
  };