const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");
const sequelize = require("./util/database");
const Pokemones = require("./models/pokemones")
const Regiones = require("./models/regiones")

const errorController = require("./controllers/ErrorController")

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views","views");

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

const pokemonesRouter = require('./routes/pokemones');
const regionesRouter = require('./routes/regiones');

app.use(regionesRouter);
app.use(pokemonesRouter);

const homeController = require('./routes/home');

app.use(homeController);

const regionesController = require('./routes/regiones');

app.use(regionesController);

const tiposController = require('./routes/tipo_pokemon');

app.use(tiposController);



app.use(errorController.Get404);

sequelize.sync().then(result=>{
  app.listen(5002);
}).catch(err =>{
  console.log(err);
});

