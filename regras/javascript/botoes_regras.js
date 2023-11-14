const botaoGerais = document.getElementById('btn-gerais');
const conteudoRegrasGerais = document.getElementById('btn-conteudo-gerais');
const botaoFecharRegrasGerais = document.getElementById('btn-fecha');

const botaoConstrucao =  document.getElementById('btn-construcao');
const conteudoRegrasConstrucao = document.getElementById('btn-conteudo-construcao');
const botaoFechaRegrasConstrucao = document.getElementById('btn-fecha-construcao')

botaoGerais.addEventListener('click', () =>{
    conteudoRegrasGerais.classList.add('ativado');
});

botaoFecharRegrasGerais.addEventListener('click', () =>{
    conteudoRegrasGerais.classList.remove('ativado');
});

botaoConstrucao.addEventListener('click', () =>{
    conteudoRegrasConstrucao.classList.add('ativado');
});

botaoFechaRegrasConstrucao.addEventListener('click', () =>{
    conteudoRegrasConstrucao.classList.remove('ativado');
});