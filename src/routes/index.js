const { Router } = require("express");
const router = Router();

const postAllData = require("../Controllers/postAllData")
const getAllData = require("../Controllers/getAllData")

// TRAE TODOS LOS PRODUCTOS DE LA BASE DE DATOS
router.get("/data", getAllData)

//AGREGA NUEVOS PRODUCTOS A LA BASE DE DATOSÍ
router.post("/data", postAllData)

module.exports = router;   