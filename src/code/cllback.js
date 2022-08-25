//Callback Functions in JavaScript
// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2;
};
// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
const test = () => {
  console.log("test!");
  console.log(cube(callback, 3));
};

export { test };
