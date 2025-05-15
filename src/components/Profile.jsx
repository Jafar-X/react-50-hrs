import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
  });

  const handleChange = (e) => {
    //console.log('value:', e.target);
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={profile.name}
            placeholder="Enter name"
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="text"
            name="age"
            onChange={handleChange}
            value={profile.age}
            placeholder="Enter age"
          />
        </label>
      </div>
      <h1>User Profile</h1>
      <h2>Name: {profile.name}</h2>
      <h2>Age: {profile.age}</h2>
    </div>
  );
};

export default Profile;
