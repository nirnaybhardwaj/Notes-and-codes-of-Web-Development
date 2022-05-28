// JAVASCRIPT IS MADE AS A BROWSER SIDE LANGUAGE 

// IN BROWSERS JAVASCRIPT ENGINE IS INTEGRATED 
// FOR EXMPLE - IN CHROME - V8 ENGINE IS INTEGRATED TO RUN JAVASCRIPT
                // IN MOZILLA - SPIDER ENGINE
                // IN INTERNET EXPLORER - CHAKRA ENGINE


var a = 2;


var b = 'nirnay' //Dynamic Typing

console.log(b)

console.log(a)

var a = 'My name is Steve'

//var Keyword's problem is that it can be Redeclared
// Solution - by using let keyword we can solve this problem

console.log(a)

a = 'pepcoding'

// var can be reassign and all in all languages reassign happens

console.log(a)

var b = true
var c =2300000



// let keyword


let d = 'pepcoding'

d = 'nirnay'

// let keyword is not redeclared 

console.log(d)


//var is function scoped and let is block scoped

function test(){
    var a = 2
    console.log(a) // 2
}
test()
console.log(a)// this is not allowed

if(true){
    var b = 3
    console.log(b) // 4
}
//var in block scoped access outside the block

// downside of using var in block scoped
// solution - using let to aviod scope of var 

console.log(b) // 4 


//let block scoped

if(true){
    let c = 'pep'
    console.log(c)
}  // this is block scoped in let



//const keyword throught the same

const e = 2

// reassign and redeclare is not posssible
//block scoped 

console.log(e)