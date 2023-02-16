//import { useId },React from "react";
import users0 from "../assets/users0";
//const idkey = useId();

const usdata = users0.map((user) => {
  console.log(user.firstName);
  return (
    <div key={user.key}>
      {user.firstName} - {user.lastName}
    </div>
  );
});

export const UsersList = () => {
  return (
    <div>
      <h1>UsersList</h1>
      <h1>============</h1>
      <div>{usdata}</div>
    </div>
  );
};
