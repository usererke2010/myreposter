// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// alert(webTechs)
// // alert('Numbers of webTechs:' + ' ' +  webTechs.length)
// let lastIndex = webTechs.length - 1
// lastwebTechs = webTechs[lastIndex]
// alert(lastwebTechs)
// let numbers = [1,2,3,4,5]

// numbers[0] = 10;
// alert(numbers)
// const arr = Array()

// const eightEmtyValues = Array(5).fill('a')
// alert(eightEmtyValues)

const fl = [1,2,3]
const sl = [4,5,6]

const tl = sl.concat(fl)
alert(tl)

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// alert(words)

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// var challenge = '30 Days Of JavaScript';

// // 2. Print the string on the browser console using console.log()
// console.log(challenge);

// // 3. Print the length of the string on the browser console using console.log()
// console.log(challenge.length);

// // 4. Change all the string characters to capital letters using toUpperCase() method
// console.log(challenge.toUpperCase());

// // 5. Change all the string characters to lowercase letters using toLowerCase() method
// console.log(challenge.toLowerCase());

// // 6. Cut (slice) out the first word of the string using substr() or substring() method
// console.log(challenge.substr(0, challenge.indexOf(' '))); // Using substr()
// // Or
// console.log(challenge.substring(0, challenge.indexOf(' '))); // Using substring()

// // 7. Slice out the phrase 'Days Of JavaScript' from '30 Days Of JavaScript'.
// console.log(challenge.slice(challenge.indexOf('Days'), challenge.length));

// // 8. Check if the string contains the word 'Script' using includes() method
// console.log(challenge.includes('Script'));

// // 9. Split the string into an array using split() method
// console.log(challenge.split(' '));

// // 10. Split the string '30 Days Of JavaScript' at the space using split() method
// console.log(challenge.split(' '));

// // 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array
// var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(companies.split(', '));

// // 12. Change '30 Days Of JavaScript' to '30 Days Of Python' using replace() method
// console.log(challenge.replace('JavaScript', 'Python'));

// // 13. What is the character at index 15 in '30 Days Of JavaScript' string? Use charAt() method
// console.log(challenge.charAt(15));

// // 14. What is the character code of 'J' in '30 Days Of JavaScript' string using charCodeAt()
// console.log(challenge.charCodeAt(challenge.indexOf('J')));

// // 15. Use indexOf to determine the position of the first occurrence of 'a' in '30 Days Of JavaScript'
// console.log(challenge.indexOf('a'));

// // 16. Use lastIndexOf to determine the position of the last occurrence of 'a' in '30 Days Of JavaScript'
// console.log(challenge.lastIndexOf('a'));

// // 17. Use indexOf to find the position of the first occurrence of the word 'because' in the sentence
// var sentence = 'You cannot end a sentence with because because because is a conjunction';
// console.log(sentence.indexOf('because'));

// // 18. Use lastIndexOf to find the position of the last occurrence of the word 'because' in the sentence
// console.log(sentence.lastIndexOf('because'));

// // 19. Use search to find the position of the first occurrence of the word 'because' in the sentence
// console.log(sentence.search('because'));

// // 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string
// var whitespaceString = ' 30 Days Of JavaScript ';
// console.log(whitespaceString.trim());

// // 21. Use startsWith() method with the string '30 Days Of JavaScript' and make the result true
// console.log(challenge.startsWith('30 Days'));

// // 22. Use endsWith() method with the string '30 Days Of JavaScript' and make the result true
// console.log(challenge.endsWith('JavaScript'));

// // 23. Use match() method to find all the 'a's in '30 Days Of JavaScript'
// console.log(challenge.match(/a/g));

// // 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// var firstPart = '30 Days of ';
// var secondPart = 'JavaScript';
// console.log(firstPart.concat(secondPart));

// // 25. Use repeat() method to print '30 Days Of JavaScript' 2 times 
// console.log(challenge.repeat(2));