const express = require('express');

const router = express.Router();

const tiposController = require('../controllers/TiposController');

router.get("/tipo_pokemones",tiposController.GetTiposList);
router.get("/create-tipos",tiposController.GetCreateTipos);
router.post("/create-tipos",tiposController.PostCreateTipos);
router.get("/edit-tipos/:tiposId",tiposController.GetEditTipos);
router.post("/edit-tipos",tiposController.PostEditTipos);
router.post("/delete-tipos",tiposController.PosDeleteTipos);


module.exports = router;