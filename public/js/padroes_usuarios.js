let alma_atual = 1

function trocar_alma() {
    if (alma_atual == 7) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/determinacao.svg" alt="Determinação">'
        alma_atual = 1
    } else if (alma_atual == 1) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/paciencia.svg" alt="Paciência">'
        alma_atual = 2
    } else if (alma_atual == 2) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/bravura.svg" alt="Bravura">'
        alma_atual = 3
    } else if (alma_atual == 3) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/integridade.svg" alt="Integridade">'
        alma_atual = 4
    } else if (alma_atual == 4) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/perseveranca.svg" alt="Perseverança">'
        alma_atual = 5
    } else if (alma_atual == 5) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/bondade.svg" alt="Bondade">'
        alma_atual = 6
    } else if (alma_atual == 6) {
        logo_container.innerHTML = '<img id="logo" src="../assets/imgs/justica.svg" alt="Justiça">'
        alma_atual = 7
    }
}

function verificar_resultado() {
        fetch(`resultados/resultado/${sessionStorage.ID_USUARIO}`, { method: "GET", headers: { "Content-Type": "application/json" } }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    sessionStorage.POSSUI_RESULTADO = resposta

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');

                sessionStorage.POSSUI_RESULTADO = "Não"
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }