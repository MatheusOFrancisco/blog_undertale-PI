let alma_atual = 1

function trocar_alma() {
    if (alma_atual == 7) {
        alma_header.innerHTML = '<img src="assets/imgs/determinacao.svg" alt="Determinação">'
        alma_atual = 1
    } else if (alma_atual == 1) {
        alma_header.innerHTML = '<img src="assets/imgs/paciencia.svg" alt="Paciência">'
        alma_atual = 2
    } else if (alma_atual == 2) {
        alma_header.innerHTML = '<img src="assets/imgs/bravura.svg" alt="Bravura">'
        alma_atual = 3
    } else if (alma_atual == 3) {
        alma_header.innerHTML = '<img src="assets/imgs/integridade.svg" alt="Integridade">'
        alma_atual = 4
    } else if (alma_atual == 4) {
        alma_header.innerHTML = '<img src="assets/imgs/perseveranca.svg" alt="Perseverança">'
        alma_atual = 5
    } else if (alma_atual == 5) {
        alma_header.innerHTML = '<img src="assets/imgs/bondade.svg" alt="Bondade">'
        alma_atual = 6
    } else if (alma_atual == 6) {
        alma_header.innerHTML = '<img src="assets/imgs/justica.svg" alt="Justiça">'
        alma_atual = 7
    }
}

function desmutar_musica() {
    let audio = document.getElementById("audio_pagina");

    if (audio.muted) {
        audio.muted = false;
        audio.play();
        link_audio.innerHTML = '<img src="assets/imgs/alto_falante_com_som.svg" alt="">'
    } else {
        audio.muted = true;
        link_audio.innerHTML = '<img src="assets/imgs/alto_falante_sem_som.svg" alt="">'
    }
}