function sayHello(){
    let userName = "John";
    alert(`Hello, ${userName}!`);
}

// sayHello();
// sayHello();
// sayHello();

function sayHello(userName){
    alert(`Hello, ${userName}!`);
}

// sayHello('John');
// sayHello('Jack');
// sayHello('Julia');

function sayHello(){
    return `Hello, John!`;
}

// alert(sayHello()); 

// let helloText = sayHello(); //запишем результат в переменную
// alert(helloText);

function getMultiply(a, b){
    return a * b;
}

let multiply = getMultiply(5, 4);
alert(multiply);

multiply = getMultiply(10, 200);
alert(multiply);

multiply = getMultiply(55, 75);
alert(multiply);

function getSum(a, b, c) {
    return a + b + c;
}