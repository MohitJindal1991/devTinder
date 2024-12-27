const express=require('express');

const app=express();
const router=express.Router; 

app.get('/',(req,res)=>{
    res.send("Server Started");
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
})

app.listen(3000,()=>{
    console.log("server started");
})