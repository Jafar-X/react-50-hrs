import React from 'react';

const Greeting = ({ timeOfDay }) => {
  return timeOfDay === 'morning'
    ? 'Good Morning!'
    : timeOfDay === 'afternoon'
    ? 'Good Afternoon!'
    : timeOfDay === 'evening' && 'Good Evening!';
};

export default Greeting;
