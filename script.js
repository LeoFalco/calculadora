var memoria = 0;

const operacao = Object.freeze({
    SOMAR: 0,
    SUBTRAIR: 1,
    MULTIPLICAR: 2,
    DIVIDIR: 3
});

const visor1 = document.getElementById("visor1");
const visor2 = document.getElementById("visor2");


function addVisor(num) {
    visor1.value += num;
}

function enter() {
    visor2.value = visor1.value;
    visor1.value = "";
}

function trocaSinal() {

    if(visor1.value === '') return;

    visor1.value = -visor1.value;
}

function calcular(opcao) {

    var a, b, res;

    b = visor1.value;
    a = visor2.value;

    // se os visores estiverem vazios para a funcao
    if (a === '' || b === '') return;

    b = parseFloat(b);
    a = parseFloat(a);

    switch (opcao) {
        case operacao.SOMAR:
            res = a + b;
            break;

        case operacao.SUBTRAIR:
            res = a - b;
            break;

        case operacao.MULTIPLICAR:
            res = a * b;
            break;

        case operacao.DIVIDIR:
            res = a / b;
            break;
    }

    visor2.value = res;
    limpar(visor1);
}

function limpar(...visor) { // funcao q recebe uma quantidade n de parametros
    for (var i = 0; i < visor.length; i++) {
        visor[i].value = "";
    }
}
