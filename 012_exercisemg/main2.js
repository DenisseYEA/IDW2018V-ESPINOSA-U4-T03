var mongoose = require("mongoose");
var titleSchema = require('./titleSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Titles', { useMongoClient: true });

//Modelo

var Title = mongoose.model('Title', titleSchema, "titles");

var Title2 = {
    title: "Rosa",
    author: "Yani",
    body: "EA"
}

//Guardo utilizando directamente el modelo y un objeto denominado user2
Title.create(Title2, (error, data) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado Title2" + data);
    process.exit(0);
});

