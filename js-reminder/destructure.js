const name = {
  name: "play2",
  age: 29,
  greet() {
    console.log("Hello " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(name);

const { age } = name;
console.log(age);

const hobbies = ["sports", "cooking"];
const [hobby1] = hobbies;
console.log(hobby1);
