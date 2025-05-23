interface UserShape {
  name: string;
  age: number;
  email: string;
}

const User = ({ name, age, email }: UserShape) => {
  return (
    <div>
      Name: {name} <br />
      Age: {age} <br />
      email: {email} <br />
    </div>
  );
};

export default User;
