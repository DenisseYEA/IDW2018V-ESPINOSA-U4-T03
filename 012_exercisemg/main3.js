var mongoose = require("mongoose");
var titleSchema = require('./titleSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Titles', { useMongoClient: true });

//Modelo

var Title = mongoose.model('Title', titleSchema, "titles");

//Guardo utilizando directamente el modelo y un objeto directamente en el método create
Title.create({title: "Mujer",author: "Yani",body: "EA"},
    (error,data)=>{
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log("Guardado Title3"+data);
        process.exit(0);
    }
);