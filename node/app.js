var express = require('express');
var app = express();
const sequelize = require('./config/config.json');
const User = require('./models/User');

const PORT = process.env.port || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
  User.create({
    firstName: "carapeto gamers",
    lastName: new Date(1987, 3, 4)
  }).then(user=>{
      res.json(user);
  })
}); 

app.listen(3000, ()=>{
    console.log(`listen app on port ${PORT}`);
    sequelize.sync({force:false}).then(()=>{
    // sequelize.authenticate().then(()=>{
        console.log("nos hemos conectado a la base de datos");
    }).catch(error=>{
        console.log("se ha producido un error", error);
    });
})