const express =require('express');
const path =require('path');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const apipizzaRouter=require('./server/api-pizza.route');
const app=express();
///step2
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    () =>console.log("Database connected"),
    (err) =>console.log("Failed to connect database")

);
//step3 handling app static resources
app.use(bodyparser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,resp)=>{
      //resp.sendFile("index.html");
    resp.send("Welcome to PizzaHut");
});
app.use('/pizza',apipizzaRouter);
//step:4 starting server
app.listen(4000,()=>{console.log("Server listening at 4000")});

