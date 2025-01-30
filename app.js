
let listaNumerosSorteados = [];
let espacoAmostral = 25;
let numeroSecreto = gerarNumero();
let tentativas = 1

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${espacoAmostral}`);
}

mensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!!');
        let = palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * espacoAmostral + 1);
    if (listaNumerosSorteados.length == espacoAmostral) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    limparCampo()
}