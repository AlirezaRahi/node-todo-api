var express=require('express');
var bodyParser=require('body-parser');

var {user}=require('./models/user');
var {Todo}=require('./models/todo');
var {mongoose}=require('./db/mongoose');


var app=express();
app.use(bodyParser.json())

app.post('/todos',(request,response)=>{
    var todo=new Todo({
        Text:request.body.text
    });
    todo.save().then((doc)=>{
        response.send(doc);
    },(e)=>{
        response.status(400).send(e);
    })
})
app.listen(3000,()=>{
    console.log('Started on port 3000')
})