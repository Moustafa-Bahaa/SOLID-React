// userApi interface that defines a getUsers method
export const userApi = {
    getUsers: () => {},
   };
   
   // userService module that implements the userApi interface
   import { userApi } from "./userApi";
   
   export const userService = {
    getUsers: () => {
      return fetch("/api/users").then((response) => response.json());
    },
   };
   
   Object.assign(userService, userApi);