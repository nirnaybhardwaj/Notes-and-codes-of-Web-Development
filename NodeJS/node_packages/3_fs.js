// Reading
// Writing
// Update(Append)
// Delete


// fs = File System Module 
const fs = require('fs')


// 1. File ko Read kaise kre (Reading A File)

let content = fs.readFileSync('f1.txt')
// console.log('Data ' + content)
//    or
console.log(content.toString())


// 2. Writing into a file

fs.writeFileSync('f2.txt', 'This data will be written on f2 file')

// if the file name is passed doesnot exist a new file will be created with its name and the data will be written on that file
fs.writeFileSync('f3.txt', 'This will be written in f3 file')


// 3. Append(update a file)

// appendFilesync method  adds new data to a previously written file 
fs.appendFileSync('f3.txt', ' This is updated data')


// 4. Delete

fs.unlinkSync('f1.txt')
console.log('file deleted')
