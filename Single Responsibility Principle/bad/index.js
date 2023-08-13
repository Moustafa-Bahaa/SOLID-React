// Bad example - Fetching and rendering data in a single component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
 const [users, setUsers] = useState([]);

useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setUsers(res.data))
     .catch(err => console.log(err));
 }, []);

return (
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
};