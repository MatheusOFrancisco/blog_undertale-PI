var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/resultado/:idUsuario", function (req, res) {
    resultadoController.buscarResultadoQuiz(req, res);
});

module.exports = router;