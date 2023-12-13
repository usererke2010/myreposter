// JS exam - november 

// 1. What is the result of `15 / "3"` in JavaScript?
//    a. 5
//    b. "53"
//    c. 15
//    d. Error

// 2. Which data type is used to represent a collection of ordered elements in JavaScript?
//    a. Object
//    b. Array
//    c. String
//    d. Boolean

// 3. How do you access the first element of an array named `myArray`?
//    a. myArray[0]
//    b. myArray.first()
//    c. myArray.getElement(1)
//    d. myArray.firstElement()

// 4. What does the `document.querySelector()` method do in the DOM?
//    a. Access an element by its class name
//    b. Access an element by its tag name
//    c. Access an element by its ID
//    d. Access an element using a CSS selector

// 5. Which operator is used for strict equality in JavaScript?
//    a. ==
//    b. ===
//    c. =
//    d. !==

// 6. In JavaScript, what does the `document.createElement()` method do?
//    a. Creates a new HTML document
//    b. Creates a new element in the DOM
//    c. Retrieves an existing element by its ID
//    d. Deletes an HTML element from the DOM

// 7. What is the purpose of the "addEventListener" method in JavaScript?
//    a. Create a new event
//    b. Remove an event listener
//    c. Attach an event handler to an element
//    d. Trigger an event manually

// 8. How do you declare a function in JavaScript?
//    a. function: myFunction()
//    b. def myFunction()
//    c. function myFunction()
//    d. declare myFunction()

// 9. In JavaScript, how do you check if a variable is an array?
//    a. typeof array
//    b. isArray(variable)
//    c. isTypeOf(array, 'array')
//    d. array instanceof Array

// 10. What does the "else" statement do in a conditional structure?
//     a. It specifies the code to be executed if the condition is true.
//     b. It is used for error handling.
//     c. It specifies the code to be executed if the condition is false.
//     d. It is used to break out of a loop.

// ### Problem 1: Loop
// Write a program that prints even numbers between 0 and 50.

// ### Problem 2: Array Manipulation
// Given an array `numbers = [2, 4, 6, 8, 10]`, write a function to calculate and return the sum of all elements.

// ### Problem 3: Object
// Create an object representing a car with properties "brand" and "model." Write a method within the object to display the car's details.

// ### Problem 4: Function
// Implement a function called `calculateFactorial` that takes an integer parameter `n` and returns the factorial of `n`.

// ### Problem 5: DOM Manipulation
// Use JavaScript to change the background color of an HTML element with the id "myElement" to green when a button with id "colorButton" is clicked.

// ### Question 1:
// Explain the concept of callbacks in JavaScript. Provide an example and discuss why closures are useful.

// ### Question 2:
// Describe the key differences between the "for" loop and the "while" loop in JavaScript. Provide examples of situations where you would use one over the other.

//1 d
//2 a
//3 a
//4 d
//5 b
//6 b
//7 a
//8 c
//9 b
//10 c

// // Problem 1: Loop
// console.log("Problem 1: Loop");
// for (let i = 0; i <= 50; i += 2) {
//   console.log(i);
// }

// // Problem 2: Array Manipulation
// console.log("\nProblem 2: Array Manipulation");
// const numbers = [2, 4, 6, 8, 10];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Sum of all elements:", sum);

// // Problem 3: Object
// console.log("\nProblem 3: Object");
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   displayDetails: function () {
//     console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//   },
// };
// car.displayDetails();

// Problem 4: Function
// console.log("\nProblem 4: Function");
// function calculateFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * calculateFactorial(n - 1);
//   }
// }
// const factorialResult = calculateFactorial(5);
// console.log("Factorial of 5:", factorialResult);

// Problem 5: DOM Manipulation
// console.log("\nProblem 5: DOM Manipulation");
// const colorButton = document.getElementById("colorButton");
// const myElement = document.getElementById("myElement");

// colorButton.addEventListener("click", function () {
//   myElement.style.backgroundColor = "green";
// });

// Question 1
// JavaScript тілінде кері шақырулар басқа функцияға аргумент ретінде берілетін және белгілі бір операция аяқталғаннан кейін орындалатын функциялар болып табылады.
// Мысалдар :
// function fetchData(callback) {
//     //Бұл серверге сұрау сияқты асинхронды операция деп есептейік
//     setTimeout(function () {
//       const data = "Данные успешно получены";
//       callback(data); // Вызываем обратный вызов и передаем ему данные
//     }, 2000);
//   }
  
//   // Функцияны кері шақыру арқылы пайдалану
//   fetchData(function (result) {
//     console.log(result);
//   });

// Question 2
//  JavaScript тіліндегі for және while циклдері қайталанатын әрекеттерді ұйымдастырудың екі түрлі тәсілі болып табылады. Міне, олардың арасындағы негізгі айырмашылықтар:

// for циклі:
// Инициализация, шарт, қадам: for циклінде инициализацияны, шартты және қадамды бір жолда біріктіруге болады. Бұл кодты ықшам етеді.
// for(i = 0; i < 5; i++) {
//   // әрбір итерацияда орындалатын код
// }
// while циклі:
// Басындағы шарт: уақытша циклде әрбір итерация алдында шарт тексеріледі. Шарт ақиқат болса, цикл денесі орындалады.
// let i = 0
// while(i <5) {
//   // әрбір итерацияда орындалатын код
//   i++;
// }

// Қолдану мысалдары:
// for циклін пайдалану:
// // Мысал: 0-ден 8-ге дейінгі жұп сандарды басып шығару
// for(i = 0; i <= 8; i += 2) {
//   console.log(i);
// }
// While циклін пайдалану:
// // Мысал: уақытша циклды пайдаланып 1-ден 5-ке дейінгі сандарды басып шығару
// let i = 1 
// while(i <= 5) {
//   console.log(i);
//   i++;
// }