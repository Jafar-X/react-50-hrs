import React, { useLayoutEffect } from 'react';
import { useState } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState(['Jafar', 'Dishan']);
  const addOneFriend = () => setFriends([...friends, 'Mahadi']);
  const removeOneFriend = () =>
    setFriends(friends.filter((f) => f !== 'Dishan'));
  const updateOneFriend = () =>
    setFriends(friends.map((f) => (f === 'Mahadi' ? 'Mahdi Hasan' : f)));

  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add One Friend</button>
      <button onClick={removeOneFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </section>
  );
};

export default Friends;
