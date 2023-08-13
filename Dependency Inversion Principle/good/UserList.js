/**
 * Dependency Inversion Principle (DIP)
 * The DIP states that high-level modules should not depend on low-level modules but both should depend on abstractions.
 *   In React, this means that components should not be tightly coupled to other components or libraries.
 * 
 */
// UserList component that depends on the userApi interface
import React, { useState, useEffect } from "react";
import { userApi } from "../services/userApi";

const UserList = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
   userApi.getUsers().then((data) => {
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

/**
 *  the UserList component depends on an abstraction (userApi interface)
 *  rather than a concrete implementation (userService module), which makes it easier to test and maintain.
 */