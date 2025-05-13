import React, { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 1, name: 'Intersteller', ratings: 9.2 },
    { id: 2, name: 'Source Code', ratings: 7.1 },
    { id: 3, name: 'Shutter Island', ratings: 8.4 },
  ]);

  const changeName = () =>
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, name: 'John Wick' } : m))
    );
  return (
    <div>
      {movies.map((m) => (
        <ul key={m.id}>
          <h1>Name: {m.name}</h1>
          <p>ratings: {m.ratings}</p>
        </ul>
      ))}

      <button onClick={changeName}>ChangeName</button>
    </div>
  );
};

export default Movies;
