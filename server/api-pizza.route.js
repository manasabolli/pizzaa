const express=require('express');
const app=express();
//we are creating api link for Pizza
const apipizzaRouter=express.Router();
//we are importing Pizza schema
let Pizza=require('./pizza');
//get all Pizza



apipizzaRouter.route('/allPizza').get((req,resp)=>{
    
    Pizza.find((err,data)=>{
        if(err){
            resp.send("failure");
        }
        resp.send(data);
    }); 
});

apipizzaRouter.route('/addPizza').post((req,resp)=>{
    let body_pizza=new Pizza(req.body);
 // resp.send(Pizza);
body_pizza.save().then(
        (err)=>resp.send("Failure while adding pizza detalis!"),
        (resp)=>resp.send("new pizza is added to database")
);

});
module.exports=apipizzaRouter;