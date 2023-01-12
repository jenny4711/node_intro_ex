const axios =require('axios');

const process=require('process');
const cat =require('./step1.js');
console.log('===============')
console.log(cat)

//  Step 2
// Copy over your step1.js code to step2.js

// Add a new function, webCat. This should take a URL and, using axios, 
// should read the content of that URL and print it to the console.
// Modify the code that invoked cat so that, based on the command-line args, 
// it decides whether the argument is a file path or a URL and 
// calls either cat or webCat, respectively.


// cat.cat()

async function webCat(url){
  let result=axios.get(url)
  .then(function(result){
   console.log(result.data);
    

  })
  .catch(console.error)
  
}
const argv=process.argv[2]
console.log('========argv')
console.log(argv)
if(argv.slice(0,4) ==='http' ){
  webCat(argv)
}else{
  cat.cat('one.txt')
}
module.exports.webCat=webCat






