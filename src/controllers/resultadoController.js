var resultadoModel = require("../models/resultadoModel");

function buscarResultadoQuiz(req, res) {

    const idReg = req.params.idUsuario;

    resultadoModel.buscarResultadoQuiz(idReg).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o resultado.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarResultadoQuiz
}