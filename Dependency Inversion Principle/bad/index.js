
/**
 *  the UserList component directly depends on the userService module, which violates the Dependency Inversion Principle
 *  because the high-level module (UserList) depends on a low-level module (userService).
 */

// UserList component that depends on the userService module
import React, { useState, useEffect } from 'react';
import { userService } from '../services/userService';

const UserList = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
   userService.getUsers().then((data) => {
     setUsers(data);
   });
 }, []);

 return (
   <div>
     <h1>User List</h1>
     <ul>
       {users.map((user) => (
         <li key={user.id}>{user.name}</li>
       ))}
     </ul>
   </div>
 );
};

export default UserList;