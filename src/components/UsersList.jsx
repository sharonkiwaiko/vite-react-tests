import users from "../data/users_data_array";
const usersListDiv = users.map((user) => {
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
      <hr />
      <h1>
        <u>UsersList</u>
      </h1>
      <div>{usersListDiv}</div>
    </div>
  );
};
