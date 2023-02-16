import users from "../../data/users_data_array";
import { useId } from "react";
//import { var1, func1 } from "./ex1";
//import * as clb from "../../code/cllback";
/*


console.log("var1 : " + var1);
console.log("func1 : " + func1());
console.log("var1 : " + var1);


*/
//const passwordHintId = useId();
function giveId() {
  return useId();
}
const usersJsx = users.map((user) => {
  return (
    <p>
      {user.key}
      {user.firstName}
    </p>
  );
});
const ImportExamples = () => {
  return (
    <>
      <p>
        <h1>ImportExamples!h!</h1>
        <span>{usersJsx}</span>
      </p>
    </>
  );
};

export default ImportExamples;
