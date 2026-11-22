var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.post("/cadastrarResposta", function (req, res) {
    respostaController.cadastrarResposta(req, res);
})

router.post("/alterarResposta", function (req, res) {
    respostaController.alterarResposta(req, res);
});

module.exports = router;