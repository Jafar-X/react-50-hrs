import { useState } from 'react';
import UserProfile from './components/UserProfile';
import { UserProvider } from './components/UserContext';
import UpdateUser from './components/UpdateUser';
function App() {
  const [count, setCount] = useState(0);
  return (
    <UserProvider>
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      {/* <FetchDataEffect /> */}
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
}

export default App;
