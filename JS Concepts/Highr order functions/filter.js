

                    // --- FILTER --- //

//Filter returns a new array containing array elements that matches a specified condtion
//if the condition stands true it will filter out those elements and present them in a new Array


let arr = [2, 4, 3, 5, 6, 7, 8, 56]

let evenNoArr = arr.filter(function(n){
    return n % 2 == 0
})
console.log(evenNoArr)

                // Q- 1 = 

const trans = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let depositArr = trans.filter(function(n){
    return n > 0
})
console.log(depositArr)
                
