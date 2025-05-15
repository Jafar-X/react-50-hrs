import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ExampleTwo from './components/ExampleTwo';
import ExampleOne from './components/ExampleOne';
import ExampleThree from './components/ExampleThree';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} /> */}
      <ExampleTwo />
      <ExampleOne />
      <ExampleThree />
    </>
  );
}

export default App;
