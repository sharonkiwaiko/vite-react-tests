// UsersList02 = display user in a component

import users from "../data/users_data_array";
import { User } from "./User";
const usersListDiv = users.map((user) => {
  return <User firstName={user.firstName} lastName={user.lastName} />;
});
export const UsersList02 = () => {
  return (
    <div>
      <hr />
      <h1>
        <u>UsersList 02 - display user in a component</u>
      </h1>
      <div>{usersListDiv}</div>
    </div>
  );
};
