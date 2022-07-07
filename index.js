// Javascript ES6 Exercise

// Convert the code below from ES5 to ES6 and answer the question

// 1. Define a variable
const MAX_SIZE = 25 * 1024 * 1024;
let title = "Hello World";
title = "Hello ES6";
// - Question: Let and Const – What's the Difference?
// + let: . Được khai báo sẽ có block scope
//        . Được cập nhập lại biến chứ không cho khai báo lại
// + const: . Phải đặt giá trị khi khai báo biến,
//          .không thể tái khai báo biến, hay cập nhật giá trị, các loại giá trị tham chiếu có thế thay đổi thuộc tính bên trong nó

// 2. String Interpolation
const user = { name: "David" };
const card = { amount: 7, product: "Bar", unitPrice: 42 };
let message = `Hello ${user.name}, 
want to buy ${card.amount} ${card.product} for 
a total of ${card.amount * card.unitPrice} bucks?`;

// 3. Rest Parameter
function foo(x, y, ...arguments) {
  return (x + y) * arguments.length;
}
foo(1, 2, "hello", true, 7) === 9;

// 4. Default Parameter Values
function sum(x, y = 7, z = 42) {
  return x + y + z;
}

// 5. Arrow Functions
const evens = [1, 2, 3, 4, 5, 6];
let odds = evens.map((v) => {
  return v + 1;
});
let pairs = evens.map((v) => {
  return { even: v, odd: v + 1 };
});
let nums = evens.map((v, i) => {
  return v + i;
});
const fives = [];
nums.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

// 6. Classes
class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 7. Modules

// 8. Promise
function showMessAfterTimeout(msg, who, timeout) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(`${msg} Hi ${who}!`);
      }, timeout);
    } catch (error) {
      reject(error);
    }
  });
}

showMessAfterTimeout("", "Foo", 100)
  .then((msg) => showMessAfterTimeout(msg, "Bar", 100))
  .then((msg) => console.log(`Finish after 300ms: ${msg}`))
  .catch((error) => console.log(error));

// 9. Loops
let arr = [
  {
    id: 1,
    name: "Ta Van An",
    position: "Intern",
  },
  {
    id: 2,
    name: "Some Random Guy",
    position: "CEO",
  },
];

for (const ele of arr) {
  console.log(ele.name);
}

let index = arr.findIndex((item) => item.name === "Ta Van An");
console.log(index);
