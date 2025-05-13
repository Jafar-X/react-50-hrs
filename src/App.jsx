import { useState } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </>
  );
}

export default App;
