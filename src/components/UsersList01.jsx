// UsersList01 = display user the simple way
import users from "../data/users_data_array";
import { User } from "./User";
const usersListDiv = users.map((user) => {
  return (
    <div key={user.key}>
      {user.firstName} - {user.lastName}
    </div>
  );
});
export const UsersList01 = () => {
  return (
    <div>
      <hr />
      <h1>
        <u>UsersList01 = display user the simple way</u>
      </h1>
      <div>{usersListDiv}</div>
    </div>
  );
};
