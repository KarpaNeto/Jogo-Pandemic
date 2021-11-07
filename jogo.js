var altura = 0;
var largura = 0;
var vidas = 1


function ajustarTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustarTela();

function dificulty() {
    var variavelLevel = window.location.search;
    variavelLevel = variavelLevel.replace("?", "");
    var gerarDificuldade = 1500;

    if (variavelLevel == "easy") {
        gerarDificuldade = 1500;
    }
    else if (variavelLevel == "medium") {
        gerarDificuldade = 1200;
    }
    else if (variavelLevel == "hard") {
        gerarDificuldade = 900;
    }
    return gerarDificuldade;
}
function controlaTempo() {
    var tempo = 50
    var variavelCronometro = setInterval(function () {

        tempo -= 1
        if (tempo < 0) {
            clearInterval(variavelCronometro);
            clearInterval(criaVirus);
            window.location.href = "vitoria.html"
        }
        else {
            document.getElementById('meuCronometro').innerHTML = tempo;
        }
    }, 1000);
    return tempo;
}

function posicaoAleatoria() {
    if (document.getElementById("tempoVirus")) {
        document.getElementById("tempoVirus").remove();
        if (vidas >= 4) {
            window.location.href = "gameover.html";
        }
        else {
            document.getElementById("vida" + vidas).src = "imagens/vida-vazia.png";
            vidas++;
        }

    }
    var posx = Math.floor(Math.random() * largura) - 90;
    var posy = Math.floor(Math.random() * altura) - 90;

    posx = posx < 0 ? 0 : posx;
    posy = posy < 0 ? 0 : posy;

    var virus = document.createElement('img');
    virus.src = "imagens/virus.png";
    document.body.appendChild(virus);
    virus.className = tamanhoVirus() + ' ' + invertendoImagem();
    virus.style.left = posx + 'px';
    virus.style.top = posy + 'px';
    virus.style.position = 'absolute';
    virus.id = 'tempoVirus';
    virus.onclick = function () {
        this.remove();
    }
}

function tamanhoVirus() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'virus01';
        case 1:
            return 'virus02';
        case 2:
            return 'virus03';
    }

}

function invertendoImagem() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';

    }
}