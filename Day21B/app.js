// // console.log("Hello");

// // var a = 6; // declare + assign
// // console.log(a);
// // var a = 10; // re-declaration + // Reassigning
// // console.log(a);

// // let a = 6; // declare + assign
// // console.log(a);
// // a = 10; // re-declaration + // Reassigning
// // console.log(a);

// // const a = 6; // declare + assign
// // console.log(a);
// // a = 10; Reassigning
// // console.log(a);

// // console.log(a); // HOISTING
// // let a = 5;

// // HOISTING in Function

// // console.log(sum(2, 2));

// // function sum(a, b) { // Normal Function
// //   return a + b;
// // }

// // console.log(sum(2, 2));

// // let sum = (a, b) => {
// // Arrow Function
// //   return a + b;
// // };

// // let obj = {
// //   name: "Wasi",
// //   class: "Btech",
// //   sum: (a, b) => {
// //     console.log(this);
// //     return a + b;
// //   },
// // };

// // console.log(obj.sum(2, 3));

// // Higher Order Functions
// // Callback Function - A function whish is passed as an argument in another function and called inside it that will be considered as call back function
// function sum(add) { //  sum will be consideed as a HOF
// add()
// }

// function add() {

// }

// sum(add);

// // MAP
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newArr = arr.forEach((item) => {
// //   return item;
// // });
// // console.log("✌️newArr --->", newArr);

// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }
// // when our code start depending on callbacks and code start increasing Horizontaly instead of vertically and create a structure like Pyramid of Doom

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   // if promise is resolved
//   let newPR = new Promise((resolve, reject) => {
//     resolve("asasd");
//   });
//   resolve(newPR);
// });

// // promise return object = {then, catch, finally}

// promise
//   .then((data) => {
//     console.log("✌️data --->", data);
//     console.log("Dot Then Function Executed");
//     return new Promise((resolve, reject) => {
//       resolve("kuch bhi");
//     });
//   })
//   .then((data) => {
//     console.lg("New Pr Data", data);
//     return new Promise((resolve, reject) => {
//       resolve("kuch bhi");
//     });
//   })
//   .then((data) => {})
//   .catch((err) => {
//     console.log("Dot Then Function Executed", err);
//   })
//   .finally(() => {
//     console.log("Dot Finally Function Executed");
//   });
// async function doAnything() {
//   console.log("ANythnib ");
//   return 10;
// }
// async function doSomething() {
//   try {
//     const data = await doAnything();
//     console.log("✌️data --->", data);
//   } catch (error) {
//     console.log("✌️error --->", error);
//   }
// }

// const data = doSomething();
// // console.log("✌️data --->", data);
// let arr = [1, 2, 3, 4, 5, 6];
// let obj = {
//   name: "Wasi",
// };
// console.log(Array.isArray(arr)); // True
// console.log(typeof undefined); // object

// function sum() {
//   console.table({
//     name: "Wasi",
//     class: "Btech",
//     age: 99,
//   });
// }

// sum();




