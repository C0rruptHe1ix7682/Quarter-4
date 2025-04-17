// src/App.jsx
import React from 'react';
import SuperheroCard from './SuperheroCard';
import './App.css';


function App() {
  // Define your superhero information here (modify with your favorite superhero details)
  const superhero = {
    name: 'Spider-Man',
    description: 'A friendly neighborhood superhero with agile reflexes and spider-like abilities.',
    powers: ['Wall-crawling', 'Spider-sense', 'Super strength', 'Agility'],
    quote: 'With great power comes great responsibility.'
  };


  return (
    <div className="App">
      <h1>My Favorite Superhero</h1>
      <SuperheroCard
        name={superhero.name}
        description={superhero.description}
        powers={superhero.powers}
        quote={superhero.quote}
      />
    </div>
  );
}
export default App;