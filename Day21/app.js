// // let a = 5 // declaration
// // console.log('✌️a --->', a);
// // let a = 10 // re-declaration❌
// // a = 10; // re-assigning ✅

// // VAR
// // var a = 5;
// // console.log("✌️a  --->", a);
// // var a = 9 // re-declaration ✅
// // a = 10; // re-assigning ✅

// // CONST
// // const a = 10;
// // console.log("✌️a --->", a);
// // const a =15 re-declaration❌
// // a = 19

// // FUNCTION

// // function demo() {
// //   console.log("Demo Function Executed");
// //   console.log(this);
// // }
// // demo();
// // sum();

// // const sum = () => {
// //   console.log("Arrow function run");
// //   console.log(this);
// // };

// // HOISTING
// // console.log(a);
// // var a = 5;
// let a = 10;
// function add(a, b) {
//   a = 5;
//   var b = 10
// }
// add();
// console.log(a);
// // function sum(add) {
// // }

// // sum(add);
// // // HOF [Higher Order Functions]

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const retrunedArr = arr.forEach((item) => {
// //   return item;
// // });
// // console.log("✌️retrunedArr --->", retrunedArr);

// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.lg("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }
// function step4(callback) {
//   setTimeout(() => {
//     console.log("Step 4 completed");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         console.log("All steps completed");
//       });
//     });
//   });
// });

// syntax of promise
// let promise = new Promise((resolve, reject) => {
//   let newPr = new Promise((res, rej) => {
//     res("ANother Promise Resolved");
//   });
//   resolve(newPr);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log("Data from another Promise", data);
//   })
//   .catch((err) => {
//     console.log("✌️err --->", err);
//   });

// ASYNC and Await

// async function getData() {
//     try {

//     } catch (error) {

//     }
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");

//   console.log("Data fetched inside function", await response.json());
// }
// console.log("Before Data fetched outside fiunction");
// const data = getData();
// console.log("After Data fetched outside fiunction", data);

// CALL , BIND and APPLY

let obj = {
  name: "Wasi",
  class: "Btech",
  year: 2019,
  getData: function () {
    console.time();
    console.timeEnd();
  },
  list: [1, 2, 3],
};
console.log(typeof obj.list);

obj.getData();
