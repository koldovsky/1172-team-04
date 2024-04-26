// Task 1 Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/55e81485eef300ee1c000186/groups/55f14905ef96f82d08000097
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/55e81485eef300ee1c000186/groups/55f14905ef96f82d08000097

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Task 2 Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/5b034f0113b4bfbcc9002e0a/groups/5b0358f613b4bfbb33002eae
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/5b034f0113b4bfbcc9002e0a/groups/5b035c903e549dd579005d60

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// Task 3 Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/5722d8d3c341664bf800005d/groups/5caffa780839f30001773da1
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/5722d8d3c341664bf800005d/groups/5caffa780839f30001773da1

function giveMeFive(obj) {
  const result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

// Additional optional tasks:

// Task 4 Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/56b721da70fb3ce639000046/groups/5c7f939fecdbb900014babe6

function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

// Task 5 Fun with ES6 Classes #2 - Animals and Inheritance
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/56f953ba1c7b8a508100006e/groups/56fa5823e4d45d96b1001edd

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
