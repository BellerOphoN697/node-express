const fs = require('fs')
fs.readFile('./docs.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
const hello="Adding more"
fs.writeFile('./docs.txt',hello,()=>{
    console.log("done")
})