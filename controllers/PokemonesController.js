const Pokemones = require("../models/pokemones");
const Regiones = require("../models/regiones");

exports.GetPokemonList = (req, res, next) => {
  Pokemones.findAll()
    .then((result) => {
      const pokemones = result.map((result) => result.dataValues);

      res.render("pokemones/pokemones-list", {
        pageTitle: "Pokemones",
        homeActive: true,
        pokemones: pokemones,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetCreatePokemones = (req, res, next) => {

  Regiones.findAll().then(result =>{

    const regiones = result.map((result) => result.dataValues);


    res.render("pokemones/save-pokemones", {
    pageTitle: "Creacion de Pokemones",
    homeActive: true,
    editMode: false,
    regiones: regiones,
  });
  }).catch((err) => {
    console.log(err);
  });

  
  
};

exports.PostCreatePokemones = (req, res, next) => {
  const name = req.body.Name;
  const descripcion = req.body.Descripcion;
  const imagenes = req.body.ImageUrl;
  const regiones = req.body.Region;
  const tipos = req.body.Tipo;

  Pokemones.create({
    name: name,
    descripcion: descripcion,
    imagenes: imagenes,
    regiones: regiones,
    tipos: tipos,
  })
    .then((result) => {
      res.redirect("/pokemones");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetEditPokemones = (req, res, next) => {
  const edit = req.query.edit;
  const pokemoneId = req.params.pokemonesId;

  if (!edit) {
    return res.redirect("/pokemones");
  }

  Pokemones.findOne({ where: { id: pokemoneId } })
    .then((result) => {
      const pokemones = result.dataValues;

      if (!pokemones) {
        return res.redirect("/pokemones");
      }
      res.render("pokemones/save-pokemones", {
        pageTitle: "Editar Pokemones",
        homeActive: true,
        editMode: edit,
        pokemones: pokemones,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostEditPokemones = (req, res, next) => {
  const name = req.body.Name;
  const descripcion = req.body.Descripcion;
  const imagenes = req.body.ImageUrl;
  const regiones = req.body.Region;
  const tipos = req.body.Tipo;
  const pokemonesId = req.body.pokemonesId;

  Pokemones.update(
    {
      name: name,
      descripcion: descripcion,
      imagenes: imagenes,
      regiones: regiones,
      tipos: tipos,
    },
    { where: { id: pokemonesId } }
  )
    .then((result) => {
      return res.redirect("/pokemones");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PosDeletePokemones = (req, res, next) => {
  const id = req.body.pokemonesId;

  Pokemones.destroy({ where: { id: id } })
    .then((result) => {
      return res.redirect("/pokemones");
    })
    .catch((err) => {
      console.log(err);
    });
};
