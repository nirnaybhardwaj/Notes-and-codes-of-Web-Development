// Normal Function

function syahi(){

    console.log("Hyy Pepcoder")

} // function defination

syahi()  // function invokation or function calling


let a = 3;
let b = 4

console.log(a + b)
// iski bjae function use krenge


//Addition

// parameters
function add(a, b){
    console.log("Additon = ", a + b)
}

add(5, 4) // Arguments

//multiplication

function multiplication(a, b){
    console.log("Multiplication = ",a * b)
}

multiplication(3, 4)

//Subtraction

function subtraction(a, b){
    console.log("Subtraction = ",a - b)
}

subtraction(5, 3)

//Division

function div(a, b){
    console.log("Division = ",a / b)
}

div(26, 2)



// Function as expressions

// function expression
let sayHi = function(){
    console.log('Hi')
}
sayHi()

// IIFE (Immediately Invoked Function expression)

// Addition

let addition = (function(a, b){
    console.log(a + b)
}(5, 4))

// Subtraction

let subtraction = (function(a, b){
    console.log(a - b)
}(6, 3))

// Multiplication

let multiplication = (function(a, b){
    console.log(a * b)

}(4, 5))

// Division

let division = (function(a, b){
    console.log(a / b)
}(10, 5))

// addition(5, 4)
// subtraction(6, 3)
// multiplicationcc
// division(10, 5)



// return statement

function test(a, b){
    return a * b
}
let ans = test(4, 5)
console.log(ans)

// FACTORIAL 

// function fact(a){
//     let ans = 1;
//     for(let i = a; i > 0; i--){
//         ans = ans * i;
//     }
//     console.log(ans);
// }
// fact(5);