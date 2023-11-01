 const linkInicio = document.getElementById('inicio');
 const linkRegras = document.getElementById('regras');
 const linkPrecos = document.getElementById('precos');
 const linkItens = document.getElementById('itens');
 const linkLacaios = document.getElementById('lacaios');
 const linkContato = document.getElementById('contato');
 const navlinks = document.querySelectorAll('#lista-links li a');


 
linkInicio.addEventListener("click",() => {
    
    navlinks.forEach(link =>{
        link.classList.remove('link-ativado');
    });

    linkInicio.classList.add('link-ativado');
} );

linkRegras.addEventListener("click",() => {

    navlinks.forEach(link =>{
        link.classList.remove('link-ativado');
    });

    linkRegras.classList.add('link-ativado');
   
});

linkPrecos.addEventListener("click", () => {

    navlinks.forEach(link =>{
        link.classList.remove('link-ativado');
    });

    linkPrecos.classList.add('link-ativado');
    
});

linkItens.addEventListener("click", () => {

    navlinks.forEach(link =>{
        link.classList.remove('link-ativado');
    });

    linkItens.classList.add('link-ativado');
   
});

linkLacaios.addEventListener("click", () => {

    navlinks.forEach(link =>{
        link.classList.remove('link-ativado');
    });

    linkLacaios.classList.add('link-ativado');
    
});

linkContato.addEventListener("click", () => {
    
    navlinks.forEach(link =>{
        link.classList.remove('link-ativado');
    });
    
    linkContato.classList.add('link-ativado');
    
});

// const paginaAtiva = window.location.pathname;
// const navlinks = document.querySelectorAll('#lista-links li a');

// navlinks.forEach(link => {
//     if(link.href.includes (`${paginaAtiva}`)){
//         link.classList.add('link-ativado');
//     }
// })