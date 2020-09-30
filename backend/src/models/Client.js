const mongoose = require('mongoose');
 const {Schema} = mongoose;

 const clientSchema = new Schema({
     nombre: {type: String, required: true },
     apellido: {type: String, required: true},
     edad: {type: Number, required: true},
     telefono:{type: String, required:false},
     empresa: {type: String, required: true}
 })

 module.exports= mongoose.model('Client', clientSchema);