const axios=require('axios');
const fs=require('fs');
const cat =require('./step1.js');
const webCat =require('./step2.js');

function catWrite(path,text){

  fs.appendFile(path,text,{encoding:'utf8',flag:'a'},err=>{
    if(err){
      console.log('Err!',err)
      process.kill(1)
    }
    console.log('It worked!!')
   cat.cat(path)
  })


}


const argv2=process.argv[2]
const argv3=process.argv[3]
if(argv2.slice(0,4) === 'http'){
  webCat.webCat(argv2)
}else{
  console.log('hh')
}
