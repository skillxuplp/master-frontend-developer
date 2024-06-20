// 17-06-2024

////////// Fundamentals Part 1
////// Linking / Accessing JS with HTML
/**
 * 3 ways
 * 1. external
 * 2. internal / embedded
 * 3. inline
 */

////// Displaying the data
/**
 * 1. document (active window)
 * 2. console
 */

//////
/**
 * Data Types: 
 * 1. Primitive Data Types
 *  1. Number: 0 - 9; 478, 76.36, -753, 23.75, 3^2, 8**3, 9e7 
 *  2. String: a - z, A - Z, 0 - 9, `~!@#$%^&*()_-=+{}[]\|<>,.:;"'."  - ' .. ', " .. ", ` ... `
 *  3. Boolean: true, false
 * 
 * 2. Abstract Data Types
 *  1. Arrays
 *  2. Functions
 *  3. Objects
 * 
 * 3. Misc Data Types
 *  1. Undefined
 *  2. Null
 */


// 18-06-2024
////// Displaying the data
/**
 * 1. document (active window)
 * 2. console
 */

// document.write
// document.write(578);
// document.write(96.34);
// document.write(-53);
// document.write(-45.60);
// document.write(57 - 58);
// document.write(4e7);
// document.write(8^2);

// document.write('I am a single quote!');
// document.write("I am a double quote!");
// document.write('I\'m a single quote \n with outside and inside');
// document.write("I\"m a single quote with outside and inside");
// document.write(`I\'m a 
//     \"backticks\" statement`);
// document.write('<p>I\'m a para</p>');
// document.write("<h1 class='' style='color: red;'>I\'m a single quote \n with outside and inside</h1>");
// document.write(`
//     <h1 class='' style='color: red;'>
//     I\'m a single quote \n <br />
//     with outside and inside
//     </h1>`);

// document.write(true);

// console
// console.log(578);
// console.log(96.34);
// console.log(-53);
// console.log(-45.60);
// console.log(57 - 58);
// console.log(4e7);
// console.log(8^2);

// console.log('I am a single quote!');
// console.log("I am a double quote!");
// console.log('I\'m a single quote \n with outside and inside');
// console.log("I\"m a single quote with outside and inside");
// console.log(`I\'m a 
//     \"backticks\" statement`);
// console.log('<p>I\'m a para</p>');
// console.log("<h1 class='' style='color: red;'>I\'m a single quote \n with outside and inside</h1>");
// console.log(`
//     <h1 class='' style='color: red;'>
//     I\'m a single quote \n <br />
//     with outside and inside
//     </h1>`);

// console.log(true);

//////
// Identifiers
/**
 * 1. starting character should be a - z, A - Z, _, $
 * 2. from the second character it even can also be 0 - 9
 * 3. no spaces are allowed
 * 4. no special symbols are allowed expect _, $
 * 5. can be a combination of lowercase and uppercase
 * 
 * eg., fullName, salaryCredited, accountDebited, _age, num1, my_age
 */

//////
// Keywords
/**
 * if, try, for, while, async, etc.,
 */

//////
// Variables
/**
 * 1. var
 * 2. let
 * 3. const
 */

//////
// // var
// // variable declaration without any value
// var fullName;

// // coercion
// console.log("fullName: " + fullName + " " + typeof fullName);

// // string / template literal
// console.log(`fullName: ${fullName}`);

// var salaryCredited = 633.75;
// console.log(`the salaryCredited: ${salaryCredited}, 
//     the typeof value: ${typeof salaryCredited}`);

// var salaryCredited = "$633.75";
// console.log(`the salaryCredited: ${salaryCredited}, the typeof value: ${typeof salaryCredited}`);


// 19-06-2024

//////
// // let
// // variable declaration without any value
// let fullName;

// // coercion
// console.log("fullName: " + fullName + " " + typeof fullName);

// // string / template literal
// console.log(`fullName: ${fullName}`);

// let salaryCredited = 633.75;
// console.log(`the salaryCredited: ${salaryCredited}, 
//     the typeof value: ${typeof salaryCredited}`);

// salaryCredited = "$633.75";
// console.log(`the salaryCredited: ${salaryCredited}, the typeof value: ${typeof salaryCredited}`);

//////
// // const
// // variable declaration without any value
// const fullName = "Jane";

// // coercion
// console.log("fullName: " + fullName + " " + typeof fullName);

// // string / template literal
// console.log(`fullName: ${fullName}`);

// const salaryCredited = 633.75;
// console.log(`the salaryCredited: ${salaryCredited}, 
//     the typeof value: ${typeof salaryCredited}`);

// salaryCredited = "$633.75";
// console.log(`the salaryCredited: ${salaryCredited}, the typeof value: ${typeof salaryCredited}`);


//////
// Operators
// Basic Operators

// Math Operators: +, -, *, /, ^ **, 
// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now, ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schemn";

// console.log(firstName + " " + lastName);

// // Assignment Operators: +=, -=, *=, /=, %=
// let x = 10 + 5; // 15
// console.log(`x: ${x}`);

// x += 10; // x = 25
// console.log(`x: ${x}`);

// // Increment & Decrement: ++, --
// x++;
// console.log(`x: ${x}`);


// Comparison Operators: <, >, <=, >=
// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// // Operator Precedence
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(averageAge);


// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);


//////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + ' years old, doing the job ' + job + "!";  
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old, doing the job ${job} `;
console.log(jonasNew);


// 20-06-2024
