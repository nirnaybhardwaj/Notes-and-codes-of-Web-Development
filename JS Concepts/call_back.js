// callback function - A function that can be passed to another
// function as an argument so that it can be called later is konown as a callback function



function printFirstName(firstName, cb){
    console.log(firstName)
    cb('Jha')
    
}

// function printLastName(lastName){
//     console.log(lastName)
// }

// printFirstName('Neeraj', printLastName)


// Another method to write 

printFirstName('Neeraj',function printLastName(lastName){
    console.log(lastName)
});


/// WE CAN WRITE CALLBACK FUNCTION LIKE THIS ALSO


function printHello(cb){
    console.log("hello")
    cb()
}

function printBye(){
    console.log("bye")
}

printHello(printBye)