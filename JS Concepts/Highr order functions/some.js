
                     // --- SOME -- //

// Some: Conditon Check: To get true or false based on a condition 
//it will return true if 1 or more that 1 element satisfies the condition -                    

const trans = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let anyDeposit = trans.some(function(n){
    return n > 0
})
console.log(anyDeposit)

