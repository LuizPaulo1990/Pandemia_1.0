const time = 4000;

let imagemAtual = 0;
let tituloAtual = 0;

const imagens = document.querySelectorAll("#slider img");
const titulos = document.querySelectorAll("#slider h1");

const imagensMaximas = imagens.length;
const titulosMaximos = titulos.length;

function proximaImagem(){
    imagens[imagemAtual].classList.remove("selecionada");

    imagemAtual++

    if(imagemAtual >= imagensMaximas){
        imagemAtual = 0;
    }

    imagens[imagemAtual].classList.add("selecionada");
}

function proximoTitulo(){

    titulos[tituloAtual].classList.remove("selecionado");

    tituloAtual++

    if(tituloAtual >= titulosMaximos){
        tituloAtual = 0;
    }

    titulos[tituloAtual].classList.add("selecionado");
}


function start(){
    setInterval(() =>{
        proximaImagem();
        proximoTitulo();
    }, time);
}


window.addEventListener("load", start);