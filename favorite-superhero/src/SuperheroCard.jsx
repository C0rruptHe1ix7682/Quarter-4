// src/SuperheroCard.jsx
import React from 'react';
function SuperheroCard({ name, description, powers, quote }) {
  return (
    <div className="superhero-card">
      <header>
        <h2>{name}</h2>
      </header>
      <section>
        <h3>About</h3>
        <p>{description}</p>
      </section>
      <section>
        <h3>Powers</h3>
        {powers.length > 0 ? (
          <ul>
            {powers.map((power, index) => (
              <li key={index}>{power}</li>
            ))}
          </ul>
        ) : (
          <p>No powers listed.</p>
        )}
      </section>
      <footer>
        <blockquote>"{quote}"</blockquote>
      </footer>
    </div>
  );
}
export default SuperheroCard;