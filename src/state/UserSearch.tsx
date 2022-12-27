import { useState } from 'react';

const users = [
  { name: 'Terry Gilliam', age: 82 },
  { name: 'Christopher Nolan', age: 52 },
  { name: 'Quentin Tarantino', age: 59 }
];

const UserSearch: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;