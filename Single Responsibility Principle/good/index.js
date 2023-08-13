//SRP: Every function/class/component should do exactly one thing.
// Good example - Separating data fetching and rendering into separate components
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ users }) => (
 <div>
   <h2>Users</h2>
   {users.map(user => (
     <div key={user.id}>
       <p>{user.name}</p>
       <p>{user.email}</p>
     </div>
   ))}
 </div>
);

const Users = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setUsers(res.data))
     .catch(err => console.log(err));
 }, []);

 return (
   <UserList users={users} />
 );
};