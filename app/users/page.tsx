import React from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store'});
  // le cache permet d'afficher de communiquer avec le serveur et de rendre la page dynamique
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => (
          <li key={user.id.toString()}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
