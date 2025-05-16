import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ExampleTwo from './components/ExampleTwo';
import ExampleOne from './components/ExampleOne';
import ExampleThree from './components/ExampleThree';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import BasicEffect from './components/BasicEffect';
import CounterEffect from './components/CounterEffect';
import FetchDataEffect from './components/FetchDataEffect';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      <FetchDataEffect />
    </>
  );
}

export default App;
