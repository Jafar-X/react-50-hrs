import { useState } from 'react';
import UserProfile from './components/UserProfile';
import Todo from './components/Todo';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <UserProfile />
      <Todo />
    </>
  );
}

export default App;
