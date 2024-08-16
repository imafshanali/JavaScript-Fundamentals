// let userInput1 = prompt("Please enter the first number: ");
// // alert("User input: " + userInput1);

// let userInput2 = prompt("Please enter the second number: ");
// // alert("User input: " + userInput2);

// // Convert the input strings to numbers
// let number1 = parseFloat(userInput1);
// let number2 = parseFloat(userInput2);

// // Calculate the sum
// let sum = number1 + number2;

// // Display the sum
// alert("The sum of the two numbers is: " + sum);


// console.log("Heyyyyy Afshannnn");

// let name = prompt("What's your name?");
// if (name) {
//     alert("Hello, " + name + "!");
// } else {
//     alert("You didn't enter anything.");
// }

// Credential validation [example]
// let username = prompt("Username: ");
// let password = prompt("Password: ");

// if (username === "imafshanali55") {
//     if (password === "afshanlovescoding") {
//         alert("Welcome Afshan!");
//         console.log("Welcome Afshan!");
//     } else {
//         alert("Incorrect password.");
//     }
// }

// OR Operator [Example]
// let a = 5;
// let b = 6
// let c = a - b;

// if (a > b) {
//     console.log("a < b ", a < b || a === 6);
// }

// let mode = "Dark";
// let color;

// if (mode === "Dark") {
//     color = "Black";
// } else {
//     color = "White";
// }
// console.log(color);

// Arithmetic Operators
// let firstnumber = prompt("Enter the first number: ");
// let secondnumber = prompt("Enter the second number: ");
// let operator = prompt("Enter the operator (+, -, *, /): ");
// let result = 0;
// if (operator === "+") {
//     result = parseInt(firstnumber) + parseInt(secondnumber);
//     } else if (operator === "-") {
//         result = parseInt(firstnumber) - parseInt(secondnumber);
//         } else if (operator === "*") {
//             result = parseInt(firstnumber) * parseInt(secondnumber);
//             } else if (operator === "/") {
//                 result = parseInt(firstnumber) / parseInt(secondnumber);
//                 } else {
//                     result = "Invalid operator";
//                     }
//                     console.log(result);


// Input number divisible by 5 or not
// let pehlanumber = prompt("Pehla number dal:");

// if (pehlanumber % 5 === 0) {
//     console.log("Pehla number 5 se divide ho sakta hai");
// } else {
//     console.log("Pehla number 5 se divide nahi ho sakta");
// }

// Checking Grades [example]
// let scores = prompt("Enter the Marks");
// let grade;

// if (scores >= 80) {
//     grade = "A";
// } else if (scores >= 60) {
//     grade = "B";
// } else if (scores >= 40) {
//     grade = "C";
// } else {
//     grade = "F";
// }

// console.log(grade);

// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//     sum += i;
//     console.log("Sum is ",sum);
// }


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log("Number is even",i);
//     }
// }

// slice method example in string
// let str =  "Afshan"
// console.log(str.slice(0, 4));
// output: Afsh

// string literal example
// let name = prompt("Enter your full name: ");
// let username = name;
// username = `@${name}${username.length}`;
// console.log(username);

// String literal example - 2 
// let name = prompt("Enter your full name: ");
// name =`@${name}${name.length}`;
// console.log(name);

// array indexing example
// let Marks = [29,30,40,50,37];
// Marks[3] = 44;
// console.log(Marks);

// printing array elements vertically
// let family = ["Dad","Mom","Elder Brother","Me","Younger Brother","Nani"];
// for (let ind = 0; ind < family.length; ind++) {
//     console.log (family[ind]);
// }
// let cities = ["Bangalore","Mumbai","Hydrebad","Kerla","Pondicherry"];
// for (let city of cities) {
//     console.log(city);
// }


// Find the average of marks
// let Marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let mark of Marks) {
//     sum += mark;
// }
// let avg = sum / Marks.length;
// console.log(`The average of the marks is = ${avg}`);


// Using 10% discount on array Elements [example - 1]
// let prices = [450, 600, 500, 700, 900];

// for (let price of prices) {
//     let offer = price / 10;
//     price = price - offer;
//     console.log(`The amount of items after 10% discount is ${price}`);   
// }

// [example - 2]
// let mrp = [300, 500, 330, 700, 900, 450];
// let discount = 0;
// for (let cost of mrp) {
//     discount = cost / 10;
//     cost = cost - discount;
//     console.log(`The final price of the item is ${cost}`);
// }

// Array Methods
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(1, 1, "Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);


// Funtions 
// function sum(n1, n2){
//    const add = n1 + n2;
//     return add;
// }

// let firstnumber = parseInt(prompt("Enter the first number"));
// let secondnumber = parseFloat(prompt("Enter the second number"));
// let result = sum(firstnumber, secondnumber);
// console.log(result);

// const afshanSum = (a, b) => {
//     console.log(a * b);
// };

// function Function(strings){
//     for (let vowels of strings) {
//         console.log(vowels);
//     }
// }

// Function("Afshan");


// function Function(string){
//     console.log(string.length);
// }
// Function("Afshan");

// const countVowels = (string) =>{
//     let count = 0;
//     for (let vowels of string) {
//         if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels ==='o' || vowels ==='u'){
//             count++;
//         }
//     }
//     return count;
// }

// for each loop examples
// let arr = ['Afshan','Zeeshan','Shabaaz'];
// arr.forEach(arr => {
//     console.log(arr.toUpperCase())
// });

// Finding square of the numbers 
// let array = [1,3,4,5,6,7,8,9];
// array.forEach(arr => {
//     let sum = arr;
//     sum = sum * arr;
//     console.log(sum);
// });

// Filtering even numbers from an array
// let array = [1,2,3,4,5,6,7,8,9,10];
// let result = array.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(result);


// let array = [89,78,98,94,37,95];

// array.forEach(arr => {
//     if(arr > 90){
//         console.log(arr);
//     }
    
// });


// let n = prompt("Enter a Number");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i-1] = i;
// }
// console.log("Array is:",arr);

// // suming up the n number of array as an average  
// let finres = arr.reduce((res, curr) =>{
//     return res + curr;
// })
// console.log("Sum = ",finres);

// // finding the factorial of n 
// let product = arr.reduce((res, curr) =>{
//     return res * curr;
// })
// console.log("Factorial = ",product);

