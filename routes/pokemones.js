const express = require('express');

const router = express.Router();

const pokemonesController = require('../controllers/PokemonesController');

router.get("/pokemones",pokemonesController.GetPokemonList);
router.get("/create-pokemones",pokemonesController.GetCreatePokemones);
router.post("/create-pokemones",pokemonesController.PostCreatePokemones);
router.get("/edit-pokemones/:pokemonesId",pokemonesController.GetEditPokemones);
router.post("/edit-pokemones",pokemonesController.PostEditPokemones);
router.post("/delete-pokemones",pokemonesController.PosDeletePokemones);




module.exports = router;