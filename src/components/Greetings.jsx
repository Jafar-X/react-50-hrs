import React from 'react';

const Greetings = () => {
  const name = 'John';
  const date = new Date();
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Today is {date.getDate()}</p>
    </div>
  );
};

export default Greetings;
