const path = require('path')

let destinationFolder = 'D:\\FJP-8\\Java Script'

// basename = actual name of a file 

let basename = path.basename('D:\\FJP-8\\NodeJS\\node_packages\\2_os.js')
console.log(basename) 


//join  = join the path 

let join = path.join(destinationFolder, basename)
console.log(join)


// Extension name iska extension txt hai
let ext = path.extname('D:\FJP-8\NodeJS\node_packages\f3.txt')
console.log(ext)



// jis directory ya folder m hai abhie oska path 
console.log(__dirname)

// jis file m hum hai oska path de dega
console.log(__filename);

