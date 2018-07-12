var mongoose = require("mongoose");
var userSchema = require('./userSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Alumnos', { useMongoClient: true });

//Modelo

var User = mongoose.model('User', userSchema, "user2");

//Guardo utilizando directamente el modelo y un objeto directamente en el método create
User.create({name: "Yani",email:"yaniea@ittepic.edu.mx",password:"123"},
    (error,data)=>{
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Guardado User3"+data);
        process.exit(0);
    }
);