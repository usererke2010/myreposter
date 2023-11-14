let firstName = "John"; console.log(typeof firstName)
let lastName = "Maguayer";  console.log(typeof lastName)
let contry = "USA";  console.log(typeof contry)
let city = "New York";  console.log(typeof city)
let Age = 39;  console.log(typeof Age)
let isMarried = "Yes";  console.log(typeof isMarried)
let year = 1984;  console.log(typeof year)

let strnum = '10';
let num  = 10;

let roven = strnum == num

console.log(roven)

let parseint = parseInt('9.8')
let nump = 10;

let prnu = parseint == nump;

console.log(prnu) // false // because '9.8' is not an integer and its data type is a string compared to 10

let truthyExample1 = "Hello";
let truthyExample2 = 42;
let truthyExample3 = [1, 2, 3];
console.log(truthyExample1, truthyExample2, truthyExample3)

let falsyExample1 = 0;
let falsyExample2 = null;
let falsyExample3 = undefined;
console.log(falsyExample1, falsyExample2, falsyExample3)

console.log(4 > 3);      // true
console.log(4 >= 3);     // true
console.log(4 < 3);      // false
console.log(4 <= 3);     // false
console.log(4 == 4);     // true
console.log(4 === 4);    // true
console.log(4 != 4);     // false
console.log(4 !== 4);    // false
console.log(4 != '4');   // true
console.log(4 == '4');   // true
console.log(4 === '4');  // false
console.log(1)
let pythonLength = 'python'.length;
let jargonLength = 'jargon'.length;

console.log(pythonLength > jargonLength);   // false
console.log(pythonLength >= jargonLength);  // false
console.log(pythonLength < jargonLength);   // true
console.log(pythonLength <= jargonLength);  // true
console.log(pythonLength == jargonLength);  // false
console.log(pythonLength === jargonLength); // false
console.log(pythonLength != jargonLength);  // true
console.log(pythonLength !== jargonLength); // true
console.log(4 != '4');                      // true (type coercion)
console.log(4 == '4');                      // true (type coercion)
console.log(4 === '4');                     // false (strict equality, different types)

console.log(2)

console.log(4 > 3 && 10 < 12);          // true
console.log(4 > 3 && 10 > 12);          // false
console.log(4 > 3 || 10 < 12);          // true
console.log(4 > 3 || 10 > 12);          // true
console.log(!(4 > 3));                  // false
console.log(!(4 < 3));                  // true
console.log(!(false));                  // true
console.log(!(4 > 3 && 10 < 12));       // false
console.log(!(4 > 3 && 10 > 12));       // true
console.log(!(4 === '4'));              // true
const now = new Date()
const years = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${date}/${month}/${years} ${hours}:${minutes}`) // 4/1/2020 0:56
