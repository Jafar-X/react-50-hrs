import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ExampleTwo from './components/ExampleTwo';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} /> */}
      <ExampleTwo />
    </>
  );
}

export default App;
