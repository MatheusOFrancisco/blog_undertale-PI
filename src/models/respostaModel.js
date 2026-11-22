var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarResposta(fk_usuario, fk_alma, fk_personagem, qnt_DET, qnt_BRA, qnt_JUS, qnt_PAC, qnt_BON, qnt_PER, qnt_INT) {
    // DET, BRA, JUS, PAC, BON, PER, INT
    var instrucaoSql = `
        INSERT INTO resultado_quiz (fk_usuario, fk_alma, fk_personagem, determinacao, bravura, justica, paciencia, bondade, perseveranca, integridade) VALUES (${fk_usuario}, ${fk_alma}, ${fk_personagem}, ${qnt_DET}, ${qnt_BRA}, ${qnt_JUS}, ${qnt_PAC}, ${qnt_BON}, ${qnt_PER}, ${qnt_INT});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function alterarResposta(id, fk_usuario, fk_alma, fk_personagem, qnt_DET, qnt_BRA, qnt_JUS, qnt_PAC, qnt_BON, qnt_PER, qnt_INT) {
    // DET, BRA, JUS, PAC, BON, PER, INT
    var instrucaoSql = `
        UPDATE resultado_quiz set fk_usuario = ${fk_usuario}, fk_alma = ${fk_alma}, fk_personagem = ${fk_personagem}, determinacao = ${qnt_DET}, bravura = ${qnt_BRA}, justica = ${qnt_JUS}, paciencia = ${qnt_PAC}, bondade = ${qnt_BON}, perseveranca = ${qnt_PER}, integridade = ${qnt_INT} WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarResposta,
    alterarResposta
};