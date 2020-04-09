/*
const sayHello = (name = "Human") => "Hello " + name;

const lmh = sayHello("MyeongHun");

function sayHello(name = "Human") {
  return "Hello " + name;
}

const lmh = sayHello();

console.log(lmh);
*/

const button = document.querySelector("button");

// const handleClick = (event) => console.log(event);

button.addEventListener("click", (event) => console.log(event));
