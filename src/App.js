import React, { useState } from 'react';
import './App.css'; // Make sure to include your CSS here

function App() {
  const [word, setWord] = useState(['_', '_', '_']); // Example word state
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const makeGuess = () => {
    fetch('http://localhost:8080/guess', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ letter: guess }),
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Parsed data: ", data);
      setResult(data.correct ? "Correct!" : data.message);
      // Update word state here based on the response
    })
    .catch((error) => {
      console.error('Error:', error);
      setResult('Error: ' + error.message);
    });
  }

  return (
    <div>
      <header className="container">
        <hgroup style={{ textAlign: 'center' }}>
          <h1>Guess the Word!</h1>
          <p>Have fun time with your friends.</p>
        </hgroup>
        
        <div className="grid">
          {word.map((char, index) => (
            <div key={index} className="automationDot">
              <input type="text" maxLength="1" style={{ width: '60px', height: '60px' }} />
            </div>
          ))}
        </div>
      </header>

      <main className="container">
        <button onClick={makeGuess}>Guess</button>
        <div id="result">{result}</div>
      </main>
    </div>
  );
}

export default App;
