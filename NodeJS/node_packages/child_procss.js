// child process is a node module used to create sub process within a script 
// you can perform different tasks with your script 



const cp = require("child_process")

//TO OPEN CALCULTOR
// cp.execSync('calc')


// TO OPEN BROWSER
// cp.execSync('start chrome https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL') 
//cmd commands and we open any website through link


// run different file
console.log('output ' + cp.execSync('node demoo.js'))