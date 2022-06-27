const express =require('express');
const cors =require('cors');
const bodyParser=require("body-parser");
const connection=require('./db')
const app=express();

app.use(cors());
app.use(bodyParser.json())

app.get('/tasks',(req,res)=>{
    res.send('list of all task')
})

app.post('/addtasks',(req,res)=>{
    const ADD_QUERY='insert into todomanager.tasks(tasks) value($(req.body.task))'
    connection.query(ADD_QUERY,(err)=>{
       if(err) console.log(err) 
    })
    res.send('you can add all task')
})

app.get('/deletetasks',(req,res)=>{
    res.send('you can delete all task')
})

app.listen(4000,()=>{
    console.log('running on port 4000')
}) 