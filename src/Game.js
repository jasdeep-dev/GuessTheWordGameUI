import React, { useState, useEffect } from 'react';
import './Game.css'; // Make sure to include your CSS here
import Header from './Header'
function Game() {
  const [word, setWord] = useState([]); // Example word state
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const makeGuess = () => {
    fetch('http://localhost:8080/', {
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

  const fetchWord = async () => {
    try {
      const response = await fetch('http://localhost:8080');
      const data = await response.json();
      setWord(data.data.Word); // Assuming the API returns an object with a 'word' property
    } catch (error) {
      console.error('Failed to fetch word:', error);
    }
  };

  // Use useEffect to call the function on component mount
  useEffect(() => {
    fetchWord();
  }, []); // The empty dependency array ensures this runs only once on mount

  return (<>
    <div className="min-h-full">
      <Header/>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 center">Guess the Word!</h1>
          <p>Have fun time with your friends.</p>
        </div>
      </header>
    </div>


      <div className="md:container md:mx-auto m-4">
        <div class="flex justify-center grid-cols-8 gap-2">
          {word.map((char, index) => (
            <span class="shadow-xl bg-pink-200 rounded p-5">
              {index}
            </span>
          ))}
        </div>
        <button onClick={makeGuess}>Guess</button>
        <div id="result">{result}</div>
      </div>
    </>
  );
}

export default Game;
