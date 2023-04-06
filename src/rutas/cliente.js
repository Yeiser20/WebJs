const express = require('express');
const router = express.Router();
const controlador = require("../controladores/controladorCliente");

router.get('/', controlador.list);
router.post('/logear',controlador.logear);




module.exports= router;