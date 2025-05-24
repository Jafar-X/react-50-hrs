import { useState } from 'react';
import Form from './components/Form';
import FocustInput from './components/FocustInput';
import Demo from './use-context/Demo';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      {/* <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <UserProfile />
      <Todo /> */}
      {/* <Form /> */}
      {/* <FocustInput /> */}
      <Demo />
    </>
  );
}

export default App;
