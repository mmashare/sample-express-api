const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const port = 3000;

app.get("/",(req,res)=>{
  res.send("get request sucessfully summited by himanhuthakur "+ `------${process.env.Myenvvar}`)
})

app.post("/",(req,res)=>{
    res.send("post request sucessfully summited by himanhuthakur")
  })

app.listen(port,()=>{
    console.log(`your express app run on ${port}`)
  })