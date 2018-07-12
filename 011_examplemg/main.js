var mongoose = require("mongoose");
var userSchema = require('./userSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Alumnos', { useMongoClient: true });

//Modelo

var User = mongoose.model('User', userSchema, "user2");


//Documento en RAM
var user1 = new User({
    name: "Denisse",
    email: "deyaespinosaab@ittepic.edu.mx",
    password: "1234"
});

//Documento en MongoDB
user1.save((error, data) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado User1" + data);
    process.exit(0);
});