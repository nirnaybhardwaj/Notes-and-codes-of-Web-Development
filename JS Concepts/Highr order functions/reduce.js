
         // --- REDUCE -- //
// It is not given in array 
// It gives only single value


// sum of all the numbers from 1 to 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let add = 0;
// for(let i = 0; i< arr.length; i++){
//     add += arr[i];
    
// }
// console.log(add)

      // Solve by reduce method

let sumOfArr = arr.reduce(function(add, value){
    let updatedSum = add + value
    return updatedSum
}, 0)// accumulator written as add and initialize it as 0

console.log(sumOfArr)

let mulOfArr = arr.reduce(function(acc, value){
    let updatedSum = acc * value
    return updatedSum
}, 1)// accumulator written as add and initialize it as 0

console.log(mulOfArr)