
    // -----   CHECK NOTEBOOK FOR PROPER UNDERSTANDING ----- // 


const fs = require('fs')

// This is Synchronous way of reading Files

// console.log('before')

// let data1 = fs.readFileSync('f1.txt')
// let data2 = fs.readFileSync('f2.txt')
// let data3 = fs.readFileSync('f3.txt')

// console.log("This is file Data of File 1 " + data1)
// console.log("This is file Data of File 2 " + data2)
// console.log("This is file Data of File 3 " + data3)


// console.log('after')


// // Asynchronous way of reading Files


        //   ---- RANDOMNESS OR PARALLEL ORDER ------   //


console.log("before")

// readFile = Asynchronously reads the entire contents of a file.
fs.readFile('f1.txt', cb)

//  --- ERROR FIRST CALLBACK = where we define error in beginning --- // 

// err =  if readfile is having prblm of readig file
// data = if it read file 

function cb(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log('This is file data -> '+ data)
    }

}

fs.readFile('f2.txt', cb2)

function cb2(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log('This is file data -> '+ data)
    }

}

fs.readFile('f3.txt', cb3)

function cb3(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log('This is file data -> '+ data)
    }

}

console.log("After")



