const mongoose= require('mongoose');
const url = 'mongodb+srv://user:admin123@cluster0.r76hv.mongodb.net/dbClient?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('conexion exitosa'))
.catch(err => console.log(err));

module.exports= mongoose;