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

// const human = {
//   name: "mh",
//   lastName: "lee",
//   nationality: "korea",
//   favFood: {
//     breakfast: "Sam",
//     lunch: "Don",
//     dinner: "SamDon",
//   },
// };

// const name = human.name;
// const lastName = human.lastName;

// const dinner = human.favFood.dinner;

// const {
//   name,
//   lastName,
//   nationality: difName,
//   favFood: { dinner, breakfast, lunch },
// } = human;

// console.log(name, lastName, difName, lunch, dinner, breakfast);

// const days = ["Mon", "Tue", "Wed"];

// const otherDays = ["Thu", "Fri", "Sat"];

// // const allDays = days + otherDays;
// // const allDays = [days, otherDays];
// const allDays = [...days, ...otherDays];

// let allDayss = [days + otherDays];

// console.log(allDays);

// console.log(allDayss);

// const ab = {
//   first: "hi",
//   second: "hello",
// };

// const ob = {
//   third: "byebye",
// };

// const two = { ...ab, ...ob };
// console.log(two);

class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const mh = new Human("mh", "lee");

console.log(mh.name);
console.log(mh);

class Baby extends Human {
  cry() {
    console.log("Waaaaaaaa");
  }
  sayname() {
    console.log(`My name is ${this.name}`);
  }
}

const myBaby = new Baby("mini", "me");

console.log(myBaby);
console.log(myBaby.cry(), myBaby.sayname());
