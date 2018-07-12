var mongoose = require("mongoose");
var titleSchema = require('./titleSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Titles',{useMongoClient:true});

//Modelo

var Title = mongoose.model('Title',titleSchema,"titles");

Title.update({title:"Rosa"},{$set: {author:"Leslie"}},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<--------Actualización--------->");
    console.log(docs);
    process.exit(0);
});