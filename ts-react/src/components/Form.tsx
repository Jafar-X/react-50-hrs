import React, { useRef, useState, type FormEvent } from 'react';

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: '',
    email: '',
    password: '',
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" ref={name} placeholder="Enter name" />
      <input type="email" name="email" ref={email} placeholder="Enter email" />
      <input
        type="password"
        name="password"
        ref={password}
        placeholder="Enter pwd"
      />
      <button type="submit">Submit</button>
      <h2>Form info</h2>
      <p>Name: {submittedData.name}</p>
      <p>Email: {submittedData.email}</p>
      <p>Password: {submittedData.password}</p>
    </form>
  );
};

export default Form;
