const fs =require('fs')

// Step 1
// In step1.js, write a function, cat.

// It should take one argument, path, and it should read the file with that path, and print the contents of that file.

// Then, write some code that calls that function, allowing you to specify the path argument via the command line. For example:



function cat(path){
  fs.readFile(path,'utf8',(err,data)=>{
    if(err){
      console.log('Error!',err);
      process.exit(1)
    }
    console.log("DATA..",data)
  })
}
const argv =process.argv[2]
cat(argv)
module.exports.cat=cat




