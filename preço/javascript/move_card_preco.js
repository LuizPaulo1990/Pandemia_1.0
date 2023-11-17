const cardPets = document.getElementById('card-pets');
const cardTextoPets = document.getElementById('texto-pets');

const cardLacaios = document.getElementById('card-lacaios');
const cardTextoLacaios = document.getElementById('texto-lacaios');

const cardArmas = document.getElementById('card-armas');
const cardTextoArmas = document.getElementById('texto-armas');

const cardArmaduras = document.getElementById('card-armaduras');
const cardTextoArmaduras = document.getElementById('texto-armaduras');

const cardFerramentas = document.getElementById('card-ferramentas');
const cardTextoFerramentas = document.getElementById('texto-ferramentas');

const cardDiversos = document.getElementById('card-diversos');
const cardTextoDiversos = document.getElementById('texto-diversos');

/*faz  animação do card texto-pets andar para direita e aparecer */

cardPets.addEventListener('mousedown', () =>{
    cardTextoPets.classList.add('ativado');
})

cardPets.addEventListener('mouseup', () =>{
    cardTextoPets.classList.remove('ativado');
})

cardTextoPets.addEventListener('mouseup', () =>{
    cardTextoPets.classList.remove('ativado');
})

/*faz  animação do card texto-armas andar para direita e aparecer */

cardArmas.addEventListener('mousedown', () =>{
    cardTextoArmas.classList.add('ativado');
})

cardArmas.addEventListener('mouseup', () =>{
    cardTextoArmas.classList.remove('ativado');
})

cardTextoArmas.addEventListener('mouseup', () =>{
    cardTextoArmas.classList.remove('ativado');
})


/*faz  animação do card texto-armaduras andar para direita e aparecer */

cardArmaduras.addEventListener('mousedown', () =>{
    cardTextoArmaduras.classList.add('ativado');
})

cardArmaduras.addEventListener('mouseup', () =>{
    cardTextoArmaduras.classList.remove('ativado');
})

cardTextoArmaduras.addEventListener('mouseup', () =>{
    cardTextoArmaduras.classList.remove('ativado');
})


/*faz  animação do card texto-ferramentas andar para direita e aparecer */

cardFerramentas.addEventListener('mousedown', () =>{
    cardTextoFerramentas.classList.add('ativado');
})

cardFerramentas.addEventListener('mouseup', () =>{
    cardTextoFerramentas.classList.remove('ativado');
})

cardTextoFerramentas.addEventListener('mouseup', () =>{
    cardTextoFerramentas.classList.remove('ativado');
})



/*faz  animação do card texto-lacaios andar para direita e aparecer */

cardLacaios.addEventListener('mousedown', () =>{
    cardTextoLacaios.classList.add('ativado');
})

cardLacaios.addEventListener('mouseup', () =>{
    cardTextoLacaios.classList.remove('ativado');
})

cardTextoLacaios.addEventListener('mouseup', () =>{
    cardTextoLacaios.classList.remove('ativado');
})


/*faz  animação do card texto-diversos andar para direita e aparecer */

cardDiversos.addEventListener('mousedown', () =>{
    cardTextoDiversos.classList.add('ativado');
})

cardDiversos.addEventListener('mouseup', () =>{
    cardTextoDiversos.classList.remove('ativado');
})

cardTextoDiversos.addEventListener('mouseup', () =>{
    cardTextoDiversos.classList.remove('ativado');
})

