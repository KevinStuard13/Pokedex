/*exports.GetTiposs = (req,res,next) =>{
    res.render("tipo_pokemones/tipos-de-pokemones",{ pageTitle: "Tipos de pokemones" });
};*/

const Tipos = require("../models/tipos");

exports.GetTiposList = (req, res, next) => {
  Tipos.findAll()
    .then((result) => {
      const tipos = result.map((result) => result.dataValues);

      res.render("tipo_pokemones/tipos-list", {
        pageTitle: "Tipos de Pokemones",
        tipo_pokemonesActive: true,
        tipos: tipos,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetCreateTipos = (req, res, next) => {
  res.render("tipo_pokemones/save-tipos", {
    pageTitle: "Creacion de los tipos",
    tipo_pokemonesActive: true,
    editMode: false,
  });
};

exports.PostCreateTipos = (req, res, next) => {
  const tipos = req.body.Tipo;

  Tipos.create({
    tipos: tipos,
  })
    .then((result) => {
      res.redirect("/tipo_pokemones");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetEditTipos = (req, res, next) => {
  const edit = req.query.edit;
  const tipoId = req.params.tiposId;

  if (!edit) {
    return res.redirect("/tipo_pokemones");
  }

  Tipos.findOne({ where: { id: tipoId } })
    .then((result) => {
      const tipo = result.dataValues;

      if (!tipo) {
        return res.redirect("/pokemones");
      }
      res.render("tipo_pokemones/save-tipos", {
        pageTitle: "Editar Tipos",
        tipo_pokemonesActive: true,
        editMode: edit,
        tipo: tipo,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostEditTipos = (req, res, next) => {
  const tipos = req.body.Tipo;
  const tipoId = req.body.tipoId;

  Tipos.update(
    {
      tipos: tipos,
    },
    { where: { id: tipoId } }
  )
    .then((result) => {
      return res.redirect("/tipo_pokemones");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PosDeleteTipos = (req, res, next) => {
  const id = req.body.tiposId;

  Tipos.destroy({ where: { id: id } })
    .then((result) => {
      return res.redirect("/tipo_pokemones");
    })
    .catch((err) => {
      console.log(err);
    });
};
