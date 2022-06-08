
// -----   CHECK NOTEBOOK FOR PROPER UNDERSTANDING ----- //

            // ------- SERIAL ORDER ------- //

console.log("before")

// readFile = Asynchronously reads the entire contents of a file.
fs.readFile('f1.txt', cb)

function cb(err, data) {
    if (err) {
        console.log(arr)
    }
    else {
        console.log('This is file data -> ' + data)
        fs.readFile('f2.txt', cb2)
    }

}


function cb2(err, data) {
    if (err) {
        console.log(arr)
    }
    else {
        console.log('This is file data -> ' + data)
        fs.readFile('f3.txt', cb3)
    }

}


function cb3(err, data) {
    if (err) {
        console.log(arr)
    }
    else {
        console.log('This is file data -> ' + data)
    }

}

console.log("After")