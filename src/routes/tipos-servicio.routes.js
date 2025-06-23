const express = require("express");
const router = express.Router();
const { obtenerTiposServicio } = require("../controllers/TipoServicioController");

router.get("/", obtenerTiposServicio);

module.exports = router;
