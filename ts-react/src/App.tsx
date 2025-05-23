import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <UserProfile />
      <Todo /> */}
      <Form />
    </>
  );
}

export default App;
