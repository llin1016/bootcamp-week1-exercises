/**
 * Part 1:
 *    What will print and why? It will print 1, 2, undefined. The first console.log(a) call refers to the global variable, where var a = 1. Then, when y() is called, then the console.log(a) call refers to the variable a inside function y which is 2. Then, when x() is called, the console.log(a) call refers to the variable a inside function x, which is not defined.
 *    What will change if we delete line 15? Why? If we delete line 15, then it will print 1, 2, 1, because the function x will be referring to the global variable a since there is no definition of a inside the function definition of x.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

 const x = () => {
   var a = 2;
   console.log(a);
 }

 const y = () => {
   let a = 2;
   console.log(a);
   x();
 }

 let a = 1;
 console.log(a);
 y();

// function x() {
//   // var a;
//   console.log(a);
// }

// function y() {
//   var a = 2;
//   console.log(a);
//   x();
// }

// var a = 1;
// console.log(a);
// y();
