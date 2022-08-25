import React from "react";
import { var1, func1 } from "./ex1";
import * as clb from "../../code/cllback";
import usrs from "../../assets/users0";
console.log("var1 : " + var1);
console.log("func1 : " + func1());
console.log("var1 : " + var1);

const ImportExamples = () => {
  <h1>ImportExamples</h1>;
  console.log("clb : ");
  clb.test();
  console.log(usrs);
  let singleUser = usrs.map((user) => {
    //let's add the firstname and lastname together
    let fullName = user.firstName + " " + user.lastName;
    return console.log(fullName);
  });
};

export default ImportExamples;
