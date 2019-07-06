const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Pizza=new Schema({
    PizzaType: {
        type: String
    },
    PizzaName:{
        type: String
    },
    PizzaCost: {
        type:Number
    }
}, {

    collection: 'pizza'
});
module.exports = mongoose.model('Pizza',Pizza);