import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ExampleTwo from './components/ExampleTwo';
import ExampleOne from './components/ExampleOne';
import ExampleThree from './components/ExampleThree';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter />
      <TodoList />
    </>
  );
}

export default App;
