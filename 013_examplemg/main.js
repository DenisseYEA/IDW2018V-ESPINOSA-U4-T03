var mongoose = require("mongoose");
var userSchema = require('./userSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Alumnos',{useMongoClient:true});

//Modelo

var User = mongoose.model('User',userSchema,"user2");

User.find({},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<--------Consulta General--------->");
    console.log(docs);
    process.exit(0);
});