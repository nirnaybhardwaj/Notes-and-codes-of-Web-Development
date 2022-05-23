// switch(input)
// for this input we create cases 

let input = process.argv.slice(2)

// console.log(input)

let command = input[0]

switch(command){
    case 'dog':
        console.log('Dog command will be executed')
        break;
    case 'cat':
        console.log('cat command will be executed')    
        break;
    default :
    console.log('Enter a valid command')    
}