const cardPets = document.getElementById('card-pets');
const cardTextoPets = document.getElementById('texto-pets');

const cardArmas = document.getElementById('card-armas');
const cardTextoArmas = document.getElementById('texto-armas');

const cardArmaduras = document.getElementById('card-armaduras');
const cardTextoArmaduras = document.getElementById('texto-armaduras');

const cardFerramentas = document.getElementById('card-ferramentas');
const cardTextoFerramentas = document.getElementById('texto-ferramentas');

const cardLacaios = document.getElementById('card-lacaios');
const cardTextoLacaios = document.getElementById('texto-lacaios');

const cardDiversos = document.getElementById('card-diversos');
const cardTextoDiversos = document.getElementById('texto-diversos');

const larguraPagina = screen.width;

function ativaCard(cardPrincipal, cardSecundario) {
    cardSecundario.classList.add('ativado');
    cardPrincipal.classList.add('ativado');
}

function desativaCard(cardPrincipal, cardSecundario) {
    cardSecundario.classList.remove('ativado');
    cardPrincipal.classList.remove('ativado');
}

if (larguraPagina > 1000) {

    /*faz a animação do card pets usando mouse  */
    cardPets.addEventListener('mousedown', () => ativaCard(cardPets, cardTextoPets));
    cardPets.addEventListener('mouseup', () => desativaCard(cardPets, cardTextoPets));
    cardTextoPets.addEventListener('mouseup', () => desativaCard(cardPets, cardTextoPets));

    /*faz  animação do card armas usando mouse */
    cardArmas.addEventListener('mousedown', () => ativaCard(cardArmas, cardTextoArmas));
    cardArmas.addEventListener('mouseup', () => desativaCard(cardArmas, cardTextoArmas));
    cardTextoArmas.addEventListener('mouseup', () => desativaCard(cardPets, cardTextoPets));

    /*faz  animação do card  armaduras usando mouse */
    cardArmaduras.addEventListener('mousedown', () => ativaCard(cardArmaduras, cardTextoArmaduras));
    cardArmaduras.addEventListener('mouseup', () => desativaCard(cardArmaduras, cardTextoArmaduras));
    cardTextoArmaduras.addEventListener('mouseup', () => desativaCard(cardArmaduras, cardTextoArmaduras));

    /*faz  animação do card  ferramentas usando mouse */
    cardFerramentas.addEventListener('mousedown', () => ativaCard(cardFerramentas, cardTextoFerramentas));
    cardFerramentas.addEventListener('mouseup', () => desativaCard(cardFerramentas, cardTextoFerramentas));
    cardTextoFerramentas.addEventListener('mouseup', () => desativaCard(cardFerramentas, cardTextoFerramentas));

    /*faz  animação do card  lacaios usando mouse */
    cardLacaios.addEventListener('mousedown', () => ativaCard(cardLacaios, cardTextoLacaios));
    cardLacaios.addEventListener('mouseup', () => desativaCard(cardLacaios, cardTextoLacaios));
    cardTextoLacaios.addEventListener('mouseup', () => desativaCard(cardLacaios, cardTextoLacaios));

    /*faz  animação do card  diversos usando mouse */
    cardDiversos.addEventListener('mousedown', () => ativaCard(cardDiversos, cardTextoDiversos));
    cardDiversos.addEventListener('mouseup', () => desativaCard(cardDiversos, cardTextoDiversos));
    cardTextoDiversos.addEventListener('mouseup', () => desativaCard(cardDiversos, cardTextoDiversos));

} else {
    /*animações do cards usando o touch em telas portateis */

    /*faz a animação do card pets usando touch  */
    cardPets.addEventListener('touchstart', () => ativaCard(cardPets, cardTextoPets));
    cardPets.addEventListener('touchend', () => setTimeout(() => desativaCard(cardPets, cardTextoPets), 3000));
    cardTextoPets.addEventListener('touchend', () => setTimeout(() => desativaCard(cardPets, cardTextoPets), 3000));

    /*faz a animação do card armas usando touch  */
    cardArmas.addEventListener('touchstart', () => ativaCard(cardArmas, cardTextoArmas));
    cardArmas.addEventListener('touchend', () => setTimeout(() => desativaCard(cardArmas, cardTextoArmas), 3000));
    cardTextoArmas.addEventListener('touchend', () => setTimeout(() => desativaCard(cardArmas, cardTextoArmas), 3000));

    /*faz a animação do card armaduras usando touch  */
    cardArmaduras.addEventListener('touchstart', () => ativaCard(cardArmaduras, cardTextoArmaduras));
    cardArmaduras.addEventListener('touchend', () => setTimeout(() => desativaCard(cardArmaduras, cardTextoArmaduras), 3000));
    cardTextoArmaduras.addEventListener('touchend', () => setTimeout(() => desativaCard(cardArmaduras, cardTextoArmaduras), 3000));

    /*faz a animação do card ferramentas usando touch  */
    cardFerramentas.addEventListener('touchstart', () => ativaCard(cardFerramentas, cardTextoFerramentas));
    cardFerramentas.addEventListener('touchend', () => setTimeout(() => desativaCard(cardFerramentas, cardTextoFerramentas), 3000));
    cardTextoFerramentas.addEventListener('touchend', () => setTimeout(() => desativaCard(cardFerramentas, cardTextoFerramentas), 3000));

    /*faz a animação do card lacaios usando touch  */
    cardLacaios.addEventListener('touchstart', () => ativaCard(cardLacaios, cardTextoLacaios));
    cardLacaios.addEventListener('touchend', () => setTimeout(() => desativaCard(cardLacaios, cardTextoLacaios), 4000));
    cardTextoLacaios.addEventListener('touchend', () => setTimeout(() => desativaCard(cardLacaios, cardTextoLacaios), 4000));

    /*faz a animação do card diversos usando touch  */
    cardDiversos.addEventListener('touchstart', () => ativaCard(cardDiversos, cardTextoDiversos));
    cardDiversos.addEventListener('touchend', () => setTimeout(() => desativaCard(cardDiversos, cardTextoDiversos), 4000));
    cardTextoDiversos.addEventListener('touchend', () => setTimeout(() => desativaCard(cardDiversos, cardTextoDiversos), 4000));
}




