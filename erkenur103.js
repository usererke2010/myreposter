//1 b
//2 d
//3 c
//4 b
//5 d
//6 a
//7 a
//8 c
//9 c
//10 c
//11 b
//12 b
//13 c
//14 c
//15 a

function evaluateExpression(expression) {
    return eval(expression);
}

function rockPaperScissors(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    prompt('choice the ROCK , PAPER , SCISSORS')
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert('You win!')
    } else {
        alert('You lose!')
    }
}

function generatePascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let number = 1;
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += number + ' ';
            number = number * (i - j) / (j + 1);
        }
        console.log(row);
    }
}
generatePascalsTriangle(10)

function longestIncreasingSubsequence(arr) {
    let lis = Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    return Math.max(...lis);
}

function fibonacci(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
console.log(fibonacci(2))

function createTable() {
    const rows = document.getElementById('rowsInput').value;
    const cols = document.getElementById('colsInput').value;
    const table = document.getElementById('dynamicTable');

    let counter = 1;
    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = counter++;
        }
    }
}

// JavaScript
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    console.log(`Element with id ${data} was dropped into ${ev.target.id}`);
}

class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class cannot be instantiated.");
        }
    }

    getArea() {
        throw new Error("Method 'getArea()' must be implemented.");
    }

    getPerimeter() {
        throw new Error("Method 'getPerimeter()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

function fibonacciWhile(n) {
    let a = 0, b = 1, temp;
    let count = 2;

    while (count < n) {
        temp = a + b;
        a = b;
        b = temp;
        count++;
    }

    return b;
}

function findBookWithMostPages(books) {
    let maxPages = 0;
    let maxPagesBook = null;

    for (const book of books) {
        if (book.pages > maxPages) {
            maxPages = book.pages;
            maxPagesBook = book;
        }
    }

    console.log(`Book with the most pages: ${maxPagesBook.title} by ${maxPagesBook.author} with ${maxPagesBook.pages} pages.`);
}
