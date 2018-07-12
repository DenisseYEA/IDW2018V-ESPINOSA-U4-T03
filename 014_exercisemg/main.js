var mongoose = require("mongoose");
var titleSchema = require('./titleSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Titles',{useMongoClient:true});

//Modelo

var Title = mongoose.model('Title',titleSchema,"titles");

Title.find({},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<--------Consulta General--------->");
    console.log(docs);
    process.exit(0);
});