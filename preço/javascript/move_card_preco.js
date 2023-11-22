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

function ativaCard(cardPrincipal, cardSecundario, card1, card1Secundario, card2, card2Secundario, card3, card3Secundario, card4, card4Secundario, card5, card5Secundario) {
    cardSecundario.classList.toggle('ativado');
    cardPrincipal.classList.toggle('ativado');
    card1.classList.remove('ativado');
    card1Secundario.classList.remove('ativado');
    card2.classList.remove('ativado');
    card2Secundario.classList.remove('ativado');
    card3.classList.remove('ativado');
    card3Secundario.classList.remove('ativado');
    card4.classList.remove('ativado');
    card4Secundario.classList.remove('ativado');
    card5.classList.remove('ativado');
    card5Secundario.classList.remove('ativado');
}


if (larguraPagina > 1000) {

    /*faz a animação do card pets usando mouse  */
    cardPets.addEventListener('mousedown', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios,cardTextoLacaios,cardDiversos, cardTextoDiversos));
    cardTextoPets.addEventListener('mousedown', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz  animação do card armas usando mouse */
    cardArmas.addEventListener('mousedown', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmas.addEventListener('mousedown', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz  animação do card  armaduras usando mouse */
    cardArmaduras.addEventListener('mousedown', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmaduras.addEventListener('mousedown', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz  animação do card  ferramentas usando mouse */
    cardFerramentas.addEventListener('mousedown', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoFerramentas.addEventListener('mousedown', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz  animação do card  lacaios usando mouse */
    cardLacaios.addEventListener('mousedown', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));
    cardTextoLacaios.addEventListener('mousedown', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));

    /*faz  animação do card  diversos usando mouse */
    cardDiversos.addEventListener('mousedown', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));
    cardTextoDiversos.addEventListener('mousedown', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));

} else {
    /*animações do cards usando o touch em telas portateis */

    /*faz a animação do card pets usando touch  */
    cardPets.addEventListener('touchstart', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios,cardTextoLacaios,cardDiversos, cardTextoDiversos));
    cardTextoPets.addEventListener('touchstart', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    
    /*faz a animação do card armas usando touch  */
    cardArmas.addEventListener('touchstart', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmas.addEventListener('touchstart', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));


    /*faz a animação do card armaduras usando touch  */
    cardArmaduras.addEventListener('touchstart', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas,cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmaduras.addEventListener('touchstart', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
   
    /*faz a animação do card ferramentas usando touch  */
    cardFerramentas.addEventListener('touchstart', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoFerramentas.addEventListener('touchstart', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
   
    /*faz a animação do card lacaios usando touch  */
    cardLacaios.addEventListener('touchstart', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));
    cardTextoLacaios.addEventListener('touchstart', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));
   
    /*faz a animação do card diversos usando touch  */
    cardDiversos.addEventListener('touchstart', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));
    cardTextoDiversos.addEventListener('touchstart', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));

}




