const name = {
  name: "play2",
  age: 29,
  greet() {
    console.log("Hello " + this.name);
  },
};
console.log(typeof name.age);

name.greet();

const hobbies = ["sports", "cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(
  hobbies.map((hobby) => {
    return hobby.toUpperCase();
  })
);

console.log(hobbies);
