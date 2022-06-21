// higher order functions are functions which operates on another functions
// either by taking them as arguments or by returning them.

// Higher Order Functions are for Arrays only 

                           // --- MAP --- //


// Map is itself a function
// Map takes a callback functions as an argument
// Map will call the callback functions as many times as the elements in the array
// Map will process every value and will apply the instruction that is inside the callback function
// Map returns a new array

let arr = [2, 5, 9, 10, 11]

let squaredArr = arr.map(function(n){
    return n * n
})
console.log(squaredArr)

                      // Q-1 =

let nameArr = ['Ankit Sharma', 'Nirnay Bhardwaj', 'Sagar Ahlawat', 'Hardik Arora']

// use the map method and separated every element according to firstName and lastName

//SPLIT METHOD 

let firstName = nameArr.map(function(n){
    let partsOfName = n.split(' ')
    return partsOfName
})
console.log(firstName)

                            
                        //Q -2 =

const trans = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const inrToUsd = 74;

let modifiedTrans = trans.map(function(n){
    // return n / inrToUsd

    // toFixed() is used how many digits are shown after .(point)
    return (n / inrToUsd).toFixed(2) 
})
console.log(modifiedTrans)


