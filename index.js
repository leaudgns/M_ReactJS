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

// class Human {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }
// }

// const mh = new Human("mh", "lee");

// console.log(mh.name);
// console.log(mh);

// class Baby extends Human {
//   cry() {
//     console.log("Waaaaaaaa");
//   }
//   sayname() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const myBaby = new Baby("mini", "me");

// console.log(myBaby);
// console.log(myBaby.cry(), myBaby.sayname());

const days = ["Mon", "Tue", "Wed", "Thur", "Fri"];

// const smilingDays = days.map((potato) => `☆${potato}`);

// const addSmile = (potato) => `☆${potato}`;

// const smilingDays = days.map(addSmile);

// const smilingDays = days.map((day, index) => `#${index + 1}${day}`);

// const addNumber = (day, index) => `#${index + 1} ${day}`;

// const smilingDays = days.map(addNumber);

// console.log(smilingDays);

// const numbers = [
//   5,
//   1,
//   4,
//   32,
//   5,
//   44,
//   156,
//   8,
//   4,
//   1,
//   65,
//   18,
//   964,
//   6,
//   51,
//   3,
//   1,
//   8,
//   9,
//   8,
//   7,
// ];

// const biggerThan15 = numbers.filter((number) => number > 15);

// const testCondition = (number) => number > 15;

// const biggerThan15 = numbers.filter(testCondition);

// const smallerThan15 = numbers.filter((number) => number < 15);

// console.log(biggerThan15);
// console.log(smallerThan15);

// const posts = ["Hi", "Hello", "Bye"];

// const lengthThan4 = posts.filter((post) => post.length < 4);

// const notBye = posts.filter((post) => post != "Bye");

// console.log(lengthThan4);
// console.log(notBye);

// const posts = ["Hi", "Hello", "Bye"];

// posts.forEach((post) => console.log(post));

// posts.push("new");

// console.log(posts);

const greetings = ["Hi", "Howdy", "Suup"];

if (!greetings.includes("Hello")) {
  greetings.push("Hello");
}

console.log(greetings);

console.log(greetings.reverse());
