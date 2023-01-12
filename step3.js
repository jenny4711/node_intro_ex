const axios=require('axios');
const fs=require('fs');
// const cat =require('./step1.js');
// const webCat =require('./step2.js');




function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
  if (err) {
  console.error(`Error reading ${path}: ${err}`);
  process.exit(1);
  } else {
  console.log(data);
  }
  });
  }


async function webCat(url){
  let result=await axios.get(url)
  .then(function(result){
   console.log(result.data);
    

  })
  .catch(console.error)
  
}




function catWrite(path,text){

  fs.appendFile(path,text,{encoding:'utf8',flag:'a'},err=>{
    if(err){
      console.log('Err!',err)
      process.kill(1)
    }
    console.log('It worked!!')
    cat(path)
  })


}


const argv2=process.argv[2]
const argv3=process.argv[3]




if(argv2.slice(0,4) === 'http'){
  webCat(argv2)
}else if(argv3){
  catWrite(argv2,argv3)
}
else{
  cat(argv2)
}
