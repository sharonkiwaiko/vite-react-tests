import React from "react";
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}
const resisCherries = inventory.find(isCherries);
/////
console.log("inventory.find = " + resisCherries);
// { name: 'cherries', quantity: 5 }
const result = inventory.find(({ name }) => name === "cherries");
export const FindMethod = () => (
  <>
    <h1>find()</h1>
    <h1>inventory.find(isCherries) {resisCherries.toString()}</h1>
    <h1>
      inventory.find(( ) = name === "cherries") {JSON.stringify(result)}
    </h1>
  </>
);
