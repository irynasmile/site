console.log("Helllo");

let firstObj = {
  name: "hello",
};
let secondObj = firstObj;
firstObj.name = "hjkljhj";

firstObj = { name: "Bye" };
console.log(secondObj.name);
