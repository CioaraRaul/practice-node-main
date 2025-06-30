let name = "mohamed";
console.log(name);

let secondName = name;
console.log(secondName);

name = "ahmed";
console.log(secondName);

let person = {
  age: 27,
  name: "ramzy",
  hobbies: ["sports", "cooking"],
};

console.log(person);

let secondPerson = Object.assign({}, person);
console.log(secondPerson);
let fourthPerson = person.hobbies;
console.log(fourthPerson);
person.name = "sammy";
person.hobbies.push("reading");
console.log(fourthPerson.slice(0, 1));

let thirdPerson = {
  ...person,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ["sports", "cooking"];
hobbies.push("reading");
console.log(hobbies);

const coppiedArray = [...hobbies];
console.log(coppiedArray);

const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3));
