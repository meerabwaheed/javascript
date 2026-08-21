// name = "tony starch";
// console.log(name);
// isFollow = true;
// console.log(isFollow);
// isPassword = false;
// console.log(isPassword);
// let fullName = "tony starch";
// let age = 30;
// console.log(fullName);
// console.log(age);
// let age = 23;
// age = 24;
// age = 25;
// console.log(age);
// constPI = 3.14;
// console.log(constPI);
// let a ;
// console.log(a);
// let x = 10;
// console.log(x);
// const student = {
//     name:meerab,
//     age:22,
//     isPass:true
// }
// const product = {
//     name: "laptop",
//     price: 2000,
//     color: "black",
//     rating: 4.5,
// }
// const profile = {
//     name: "tony starch",
//     isFollow: true,
//     followers: 10000,
//     following: 500
// }

// let score = 75;
// let grade;
// if (score >= 90 && score <= 100){
//     grade = "A";
// }else if(score >=80 && score <= 89){
//     grade = "B";
// }else if(score >=70 && score <= 79){
//     grade = "C";
// }else if(score >=60 && score <= 69){
//     grade = "D";
// }else (score >=0 && score <= 59){
//     grade = "F";
// }

// console.log("your grade is:", grade);
// //calculate sum of loop from 1 to 5
// for(let i =1; i <=5 ; i++){
//     console.log("i =",i);
// }
// let i = 1;
// while(i <= 5){
//     console.log("i =",i);
//     i++;
// }

// let i = 20;
// do{
//     console.log("i =",i);
//     i++;
// }while(i <= 10);

// //print even numbers from 1 to 100
// for(let num = 1; num <=100 ;num++){
//     num % 2 === 0{
//    console.log(num);
//     }
// } 

// let gameNum = 90;
// let userNum = prompt("guess the correct number:");
// while(gameNum != userNum){
//     userNum = prompt("you entered wrong number.guess again:");
// }
// console.log("congratulations yo entered the correct number:");


// let str = "meerab";
// console.log(str[4]);

// let specialString = (`this is called template literals`);
// console.log(typeof specialString);



// funtions
// function myFunction(){
//     console.log("my name is meerab");
//     console.log("i'm learning js");
// }
// myFunction();

// function hellFunction(x,y){
//    s = x + y;
//    return s;
// }
// let val = hellFunction(2,3);
// console.log(val);
// sum function
// function sum(a,b){
//     return a + b;
// }
// //multiplication function
// function mul(a,b){
//     return a * b;
// }
// //arrow function

// const arrowMultiplication = (a,b) => {
//     console.log( a * b);
// }




// Create variables for your name, age, and city and print them.

let name  = "John Doe";
let age = 28;
let City = "New York";
console.log(name,age,City);
// Create variables using let, const, and var. Explain the difference through a small example.
let city = "Los Angeles"; // 'let' allows you to declare a variable that can be reassigned later.
const country = "USA"; // 'const' declares a variable that cannot be reassigned after its initial assignment.
var state = "California"; // 'var' is function-scoped and can be redeclared and reassigned, but it's generally discouraged in modern JavaScript.
console.log(city, country, state);
// Swap the values of two variables without using a third variable.
let a = 5;
let b = 10;
console.log("before swapping: a =", a, "b =", b);
a= a + b;
// Given a value, determine whether it is a string, number, boolean, undefined, null, or object.
let Name = "john";
console.log(typeof Name);
let Age = 30;
console.log(typeof Age);
let isStudent = true;
// Create a program that converts a string containing a number like "250" into a number and performs arithmetic on it.
let strNum = "250";
let num = Number(strNum);
console.log(num + 50); // Output: 300
// Take a user's age and calculate their birth year.
let userAge = 26;
let currentYear = 2026;
let birthYear = currentYear - userAge;
console.log("Your birth year is:", birthYear);
//Convert Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius *9/5) + 32;
console.log("Temperature in Fahrenheit:", fahrenheit);