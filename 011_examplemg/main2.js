var mongoose = require("mongoose");
var userSchema = require('./userSchema');

//Conexión
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Alumnos', { useMongoClient: true });

//Modelo

var User = mongoose.model('User', userSchema, "user2");

var user2 = {
    name: "Yaneth",
    email: "yanethespinosaab@ittepic.edu.mx",
    password: "1234"
}

//Guardo utilizando directamente el modelo y un objeto denominado user2
User.create(user2, (error, data) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado User2" + data);
    process.exit(0);
});

