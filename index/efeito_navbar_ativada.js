 const linkInicio = document.getElementById('inicio');
 const linkRegras = document.getElementById('regras');
 const linkPrecos = document.getElementById('precos');
 const linkItens = document.getElementById('itens');
 const linkLacaios = document.getElementById('lacaios');
 const linkContato = document.getElementById('contato');

 
linkInicio.addEventListener("click",() => {
    
    linkInicio.classList.add('link-ativado');
    linkRegras.classList.remove('link-ativado');
    linkPrecos.classList.remove('link-ativado');
    linkItens.classList.remove('link-ativado');
    linkLacaios.classList.remove('link-ativado');
    linkContato.classList.remove('link-ativado');
} );

linkRegras.addEventListener("click",() => {

    linkRegras.classList.add('link-ativado');
    linkInicio.classList.remove('link-ativado');
    linkPrecos.classList.remove('link-ativado');
    linkItens.classList.remove('link-ativado');
    linkLacaios.classList.remove('link-ativado');
    linkContato.classList.remove('link-ativado');
});

linkPrecos.addEventListener("click", () => {

    linkPrecos.classList.add('link-ativado');
    linkInicio.classList.remove('link-ativado');
    linkRegras.classList.remove('link-ativado');
    linkItens.classList.remove('link-ativado');
    linkLacaios.classList.remove('link-ativado');
    linkContato.classList.remove('link-ativado');
});

linkItens.addEventListener("click", () => {

    linkItens.classList.add('link-ativado');
    linkInicio.classList.remove('link-ativado');
    linkRegras.classList.remove('link-ativado');
    linkPrecos.classList.remove('link-ativado');
    linkLacaios.classList.remove('link-ativado');
    linkContato.classList.remove('link-ativado');
});

linkLacaios.addEventListener("click", () => {

    linkLacaios.classList.add('link-ativado');
    linkInicio.classList.remove('link-ativado');
    linkRegras.classList.remove('link-ativado');
    linkPrecos.classList.remove('link-ativado');
    linkItens.classList.remove('link-ativado');
    linkContato.classList.remove('link-ativado');
    
});

linkContato.addEventListener("click", () => {
    
    linkContato.classList.add('link-ativado');
    linkInicio.classList.remove('link-ativado');
    linkRegras.classList.remove('link-ativado');
    linkPrecos.classList.remove('link-ativado');
    linkItens.classList.remove('link-ativado');
    linkLacaios.classList.remove('link-ativado');
});