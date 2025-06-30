let name = "raul";
let age = 29;
let hasHobbies = true;

console.log(`Hello ${name}`);

function summarizeUser(name) {
  return {
    name: name || "Unknown",
    age: 30,
    country: "Spain",
  };
}

const summarizeUserArrow = (name) => {
  let errorName = "Render name error";

  return {
    name: name ? name : errorName,
    age: 30,
    country: "Spain",
  };
};

const user = summarizeUser(name);
console.log(user);

const userArrow = summarizeUserArrow(name);
console.log(userArrow);
