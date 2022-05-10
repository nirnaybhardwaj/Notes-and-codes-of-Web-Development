// String is a sequence of characters

let str = 'pepcoder'


// Length of string

console.log(str.length)


//   METHODS - 


// 1. Slice

//slice(start, end+1)

let slicestr = str.slice(3,7);
console.log(slicestr)


// 2. SubString

// substr(startIdx, length)

let substring = str.substr(3, 5)
console.log(substring)


// 3. Replacing part of the string 

// replace(valueToBePlaced, valueToBePlacedWith)

let sayhello = 'hello nirnay'
console.log(sayhello)

let saybye = sayhello.replace('hello', 'Bye')
console.log(saybye)



// 4. UPPER AND LOWER CASE


// toUpperCase()

let text1 = 'hello'
let uppercase = text1.toUpperCase()
console.log(uppercase)

// toLowerCase()

let text2 = 'BYE'
let lowercase = text2.toLowerCase()
console.log(lowercase)

// 5. Concatenation

let firstString = 'Hello'
let lastString = 'Nirnay'

// concat()

let concatString = firstString.concat(" ",lastString)
console.log(concatString)


// 6. Trim

let text = '       hello world    '
console.log(text)

let stringtrim = text.trim()
console.log(stringtrim)