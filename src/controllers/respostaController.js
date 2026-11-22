var respostaModel = require("../models/respostaModel");

function cadastrarResposta(req, res) {
    // DET, BRA, JUS, PAC, BON, PER, INT
    var personagem = req.body.personagemServer;
    var alma = req.body.almaServer;
    var usuario = req.body.usuarioServer;

    var qnt_DET = req.body.detServer;
    var qnt_BRA = req.body.braServer;
    var qnt_JUS = req.body.jusServer;
    var qnt_PAC = req.body.pacServer;
    var qnt_BON = req.body.bonServer;
    var qnt_PER = req.body.perServer;
    var qnt_INT = req.body.intServer;

    respostaModel.cadastrarResposta(usuario, alma, personagem, qnt_DET, qnt_BRA, qnt_JUS, qnt_PAC, qnt_BON, qnt_PER, qnt_INT)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro das respostas! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function alterarResposta(req, res) {
    // DET, BRA, JUS, PAC, BON, PER, INT
    var id = req.body.respostaServer;
    var personagem = req.body.personagemServer;
    var alma = req.body.almaServer;
    var usuario = req.body.usuarioServer;

    var qnt_DET = req.body.detServer;
    var qnt_BRA = req.body.braServer;
    var qnt_JUS = req.body.jusServer;
    var qnt_PAC = req.body.pacServer;
    var qnt_BON = req.body.bonServer;
    var qnt_PER = req.body.perServer;
    var qnt_INT = req.body.intServer;

    respostaModel.alterarResposta(id, usuario, alma, personagem, qnt_DET, qnt_BRA, qnt_JUS, qnt_PAC, qnt_BON, qnt_PER, qnt_INT)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o update das respostas! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarResposta,
    alterarResposta
}