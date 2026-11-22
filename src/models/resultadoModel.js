var database = require("../database/config")

function buscarResultadoQuiz(idUsuario) {
    var instrucaoSql = `
        SELECT id FROM resultado_quiz WHERE fk_usuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarResultadoQuiz
};