/*exports.GetRegion = (req,res,next) =>{
    res.render("regiones/regiones-list",{ pageTitle: "Regiones" });
};*/

const Regiones = require("../models/regiones");

exports.GetRegionesList = (req, res, next) => {
  Regiones.findAll()
    .then((result) => {
      const regiones = result.map((result) => result.dataValues);

      res.render("regiones/regiones-list", {
        pageTitle: "Regiones",
        regionesActive: true,
        regiones: regiones,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetCreateRegiones = (req, res, next) => {
  res.render("regiones/save-regiones", {
    pageTitle: "Creacion de regiones",
    regionesActive: true,
    editMode: false,
  });
};

exports.PostCreateRegiones = (req, res, next) => {
  const regiones = req.body.Region;

  Regiones.create({
    regiones: regiones,
  })
    .then((result) => {
      res.redirect("/regiones");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetEditRegiones = (req, res, next) => {
  const edit = req.query.edit;
  const regionId = req.params.regionesId;

  if (!edit) {
    return res.redirect("/regiones");
  }

  Regiones.findOne({ where: { id: regionId } })
    .then((result) => {
      const region = result.dataValues;

      if (!region) {
        return res.redirect("/regiones");
      }
      res.render("regiones/save-regiones", {
        pageTitle: "Editar Regiones",
        regionesActive: true,
        editMode: edit,
        region: region,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PostEditRegiones = (req, res, next) => {
  const regiones = req.body.Region;
  const regionId = req.body.regionId;

  Regiones.update(
    {
      regiones: regiones,
    },
    { where: { id: regionId } }
  )
    .then((result) => {
      return res.redirect("/regiones");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.PosDeleteRegiones = (req, res, next) => {
  const regionId = req.body.regionesId;

  Regiones.destroy({ where: { id: regionId } })
    .then((result) => {
      return res.redirect("/regiones");
    })
    .catch((err) => {
      console.log(err);
    });
};
