/*
const sayHello = (name = "Human") => "Hello " + name;

const lmh = sayHello("MyeongHun");

function sayHello(name = "Human") {
  return "Hello " + name;
}

const lmh = sayHello();

console.log(lmh);
*/

// const button = document.querySelector("button");

// const handleClick = (event) => console.log(event);

// button.addEventListener("click", (event) => console.log(event));

// const sayHello = (name) => `Hello ${name}`;

// const lmh = sayHello("MyeongHun");

// console.log(lmh);

const human = {
  name: "mh",
  lastName: "lee",
  nationality: "korea",
  favFood: {
    breakfast: "Sam",
    lunch: "Don",
    dinner: "SamDon",
  },
};

// const name = human.name;
// const lastName = human.lastName;

// const dinner = human.favFood.dinner;

const {
  name,
  lastName,
  nationality: difName,
  favFood: { dinner, breakfast, lunch },
} = human;

console.log(name, lastName, difName, lunch, dinner, breakfast);
