let x='hello word'
console.log(x)
const fs = require ('fs')


fs.readFile("./welcome.txt","utf-8",(err,data)=> {
    err ? console.log (err) : console.log(data)
}
)
const {response}=require ("express")
const http = require ("http")
http.createServer((reauest,response) =>{
    response.end("Hello Node!!!")
}
).listen(3000)