import { useState } from 'react';
import UserProfile from './components/UserProfile';
import { UserProvider } from './components/UserContext';
import UpdateUser from './components/UpdateUser';
import CounterWithReducer from './components/CounterWithReducer';
function App() {
  const [count, setCount] = useState(0);
  return <CounterWithReducer />;
}

export default App;
