import React from 'react';
import { useState } from 'react';

interface userProfileStructure {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<userProfileStructure>({
    name: '',
    age: 0,
    email: '',
  });

  const updateName = (name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  };

  const updateAge = (age: number) => {
    setProfile((prev) => ({ ...prev, age }));
    console.log(profile);
  };

  const updateEmail = (email: string) => {
    setProfile((prev) => ({ ...prev, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={profile.age > 0 ? profile.age : ''}
        onChange={(e) => updateAge(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="E-mail"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h3>Profile Summary</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>E-mail: {profile.email}</p>
    </div>
  );
};

export default UserProfile;
