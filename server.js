let express = require("express");
var bodyParser = require('body-parser');
// ¡úsalo!

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('index');
});
  // para procesar los datos del nuevo formulario del usuario:
app.post('/formulario', function (req, res){
    console.log(req.body.name)
    // code to add user to db goes here!
    // redirecciona al usuario devuelta a la ruta raíz.
    // Todo lo que hay que hacer es especificar el URL donde queramos que vaya:
    res.render('resultado', {formulario: req.body});
})


  
  app.listen(8000, function() {
    console.log("listening on port 8000");
  })