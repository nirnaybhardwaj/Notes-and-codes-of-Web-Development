// Reading
// Writing
// Update(Append)
// Delete


        // FILES //


// fs = File System Module 
const { Console } = require('console')
const fs = require('fs')

const path = require('path')


// // 1. File ko Read kaise kre (Reading A File)

// let content = fs.readFileSync('f1.txt')
// // console.log('Data ' + content)
// //    or
// console.log(content.toString())


// // 2. Writing into a file

// fs.writeFileSync('f2.txt', 'This data will be written on f2 file')

// // if the file name is passed doesnot exist a new file will be created with its name and the data will be written on that file
// fs.writeFileSync('f3.txt', 'This will be written in f3 file')


// // 3. Append(update a file)

// // appendFilesync method  adds new data to a previously written file 
// fs.appendFileSync('f3.txt', ' This is updated data')


// // 4. Delete

// fs.unlinkSync('f1.txt')
// console.log('file deleted')





     // DIRECTORIES OR FOLDERS //


// creation of a directory or folders
//mkdirSync

// fs.mkdirSync('myDirectory')
// console.log('Directory created')
// fs.mkdirSync('myDirectory2')
// console.log('Directory created')


// delete a directory or folders

// fs.rmdirSync('myDirectory2')
// console.log('Directory deleted')


// Exists Sync
// To check whether a directory or file exists or not
// this returns true or false based on whether the passed directory or file exists or not

// Directory or Folder
// let doesExist = fs.existsSync('myDirectory3')
// console.log(doesExist)

//file
// let doesExist1 = fs.existsSync('f2.txt')
// console.log(doesExist1)


// readdirSync


//In Scope
// let folderContent = fs.readdirSync('myDirectory')
// console.log(folderContent)

// Out of scope and double back \ will be added node js rule
// let folderContent1 = fs.readdirSync('D:\\FJP-8\\Java Script')
// console.log(folderContent1)



// Copy file from one folder to another
// yaha use hoga path module

let srcFilePath = 'D:\\FJP-8\\NodeJS\\node_packages\\myDirectory\\f1.txt'

let destinationFolder = 'D:\\FJP-8\\Java Script'

// basename = actual name of a file 
let toBeCopiedFile = path.basename(srcFilePath)
console.log(toBeCopiedFile) // f1.txt

//join  = join the path 
let destPathComplete = path.join(destinationFolder, toBeCopiedFile)
console.log(destPathComplete)

//copy file through file system
fs.copyFileSync(srcFilePath, destPathComplete)
console.log('file copied')

// It cut the file from previous folder and copy to new folder
fs.unlinkSync(srcFilePath)
console.log('cut file')



