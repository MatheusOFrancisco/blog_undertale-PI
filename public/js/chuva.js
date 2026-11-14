const canvas = document.querySelector('#chuva');
const ctx = canvas.getContext('2d');

let gotas = [];

function redimensionar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', redimensionar);
redimensionar();

for (let i = 0; i < 150; i++) {
    gotas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        velocidade: Math.random() * 5 + 5,
        tamanho: Math.random() * 15 + 10
    });
}

function chover() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(180, 210, 255, 0.5)';
    ctx.lineWidth = 1;

    gotas.forEach(gota => {
        ctx.beginPath();
        ctx.moveTo(gota.x, gota.y);
        ctx.lineTo(gota.x - 2, gota.y + gota.tamanho);
        ctx.stroke();

        gota.y += gota.velocidade;

        if (gota.y > canvas.height) {
            gota.y = -gota.tamanho;
            gota.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(chover);
}

chover();