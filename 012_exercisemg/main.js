var mongoose = require("mongoose");
var titleSchema = require('./titleSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Titles', { useMongoClient: true });

//Modelo

var Title = mongoose.model('Title', titleSchema, "titles");


//Documento en RAM
var title1 = new Title({
    title: "Loca",
    author: "Denisse",
    body: "YEA"
});

//Documento en MongoDB
title1.save((error, data) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado Title" + data);
    process.exit(0);
});