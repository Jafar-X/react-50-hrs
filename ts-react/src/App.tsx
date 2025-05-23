import User from './components/User';
import Button from './components/Button';
import type { AdminInfoList } from './types/types';
import UserInfo from './components/UserInfo';
import AdminInfo from './components/AdminInfo';

function App() {
  const user: Info = {
    id: 1,
    name: 'Dishan Hossain',
    email: 'dishan@test.com',
  };

  const admin: AdminInfoList = {
    id: 2,
    name: 'Jafar Sadik',
    email: 'jafar@test.com',
    role: 'ADMIN',
    lastLogin: new Date(),
  };

  return (
    <>
      {/* <User name="Jafar" age={25} email="jafar.test@test.com" /> */}
      {/* <Button
        label="Click Me"
        disabled={false}
        onClick={() => console.log("You clicked me")}
      /> */}

      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </>
  );
}

export default App;
