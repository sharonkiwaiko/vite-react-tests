import React, { useId } from "react";
import { var1, func1 } from "./ex1";
import * as clb from "../../code/cllback";
import usrs from "../../assets/users0";
console.log("var1 : " + var1);
console.log("func1 : " + func1());
console.log("var1 : " + var1);
/*const thusers = usrs.map((user) => {
  const id = useId();
  <div id={id}>${user.firstName}</div>;
});
*/
const ImportExamples = () => {
  return (
    <>
      <p>
        <h1>ImportExamples</h1>
      </p>
    </>
  );
};

export default ImportExamples;
/*<div>${thusers}</div>clb.test();console.log("clb : "); 
    
    console.log(usrs);
let singleUser = usrs.map((user) => {
    //let's add the firstname and lastname together
    let fullName = user.firstName + " " + user.lastName;
    return console.log(fullName);
  }
  console.log("singleUser : "+singleUser)); 
  */
