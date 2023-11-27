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

const petTitulo = document.getElementById('sub-titulo-pets');
const petImg = document.getElementById('pet-img');

const armasTitulo = document.getElementById('sub-titulo-armas');
const armasImg = document.getElementById('arma-img');

const armaduraTitulo = document.getElementById('sub-titulo-armaduras');
const armaduraImg = document.getElementById('armaduras-img');

const ferramentasTitulo = document.getElementById('sub-titulo-ferramentas');
const ferramentasImg = document.getElementById('ferramentas-img');

const lacaiosTitulo = document.getElementById('sub-titulo-lacaios');
const lacaiosImg = document.getElementById('lacaios-img');

const diversosTitulo = document.getElementById('sub-titulo-diversos');
const diversosImg = document.getElementById('diversos-img');



const larguraPagina = screen.width;

function ativaCard(cardPrincipal, cardSecundario, card1, card1Secundario, card2, card2Secundario, card3, card3Secundario, card4, card4Secundario, card5, card5Secundario,) {

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

function efeitoCardCapa(cardTitulo, cardImg, cardTitulo1, cardImg1, cardTitulo2, cardImg2, cardTitulo3, cardImg3, cardTitulo4, cardImg4, cardTitulo5, cardImg5) {

    cardTitulo.classList.toggle('ativado');
    cardImg.classList.toggle('ativado');

    cardTitulo1.classList.remove('ativado');
    cardImg1.classList.remove('ativado');
    cardTitulo2.classList.remove('ativado');
    cardImg2.classList.remove('ativado');
    cardTitulo3.classList.remove('ativado');
    cardImg3.classList.remove('ativado');
    cardTitulo4.classList.remove('ativado');
    cardImg4.classList.remove('ativado');
    cardTitulo5.classList.remove('ativado');
    cardImg5.classList.remove('ativado');
}


if (larguraPagina > 1000) {

    /*faz a animação do card pets usando mouse  */
    cardPets.addEventListener('mousedown', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos,));
    cardTextoPets.addEventListener('mousedown', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz a animação do h2 e da img do card pets usando mouse  */
    cardPets.addEventListener('mousedown', () => efeitoCardCapa(petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoPets.addEventListener('mousedown', () => efeitoCardCapa(petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));

    /*faz  animação do card armas usando mouse */
    cardArmas.addEventListener('mousedown', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos, armasTitulo, armasImg));
    cardTextoArmas.addEventListener('mousedown', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos, armasTitulo, armasImg));

    /*faz a animação do h2 e da img do card armas usando mouse  */
    cardArmas.addEventListener('mousedown', () => efeitoCardCapa(armasTitulo, armasImg, petTitulo, petImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoArmas.addEventListener('mousedown', () => efeitoCardCapa(armasTitulo, armasImg, petTitulo, petImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));

    /*faz  animação do card  armaduras usando mouse */
    cardArmaduras.addEventListener('mousedown', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmaduras.addEventListener('mousedown', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));


    /*faz a animação do h2 e da img do card armaduras usando mouse  */
    cardArmaduras.addEventListener('mousedown', () => efeitoCardCapa(armaduraTitulo, armaduraImg, petTitulo, petImg, armasTitulo, armasImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoArmaduras.addEventListener('mousedown', () => efeitoCardCapa(armaduraTitulo, armaduraImg, petTitulo, petImg, armasTitulo, armasImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));

    /*faz  animação do card  ferramentas usando mouse */
    cardFerramentas.addEventListener('mousedown', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoFerramentas.addEventListener('mousedown', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz a animação do h2 e da img do card ferramentas usando mouse  */
    cardFerramentas.addEventListener('mousedown', () => efeitoCardCapa(ferramentasTitulo, ferramentasImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoFerramentas.addEventListener('mousedown', () => efeitoCardCapa(ferramentasTitulo, ferramentasImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));

    /*faz  animação do card  lacaios usando mouse */
    cardLacaios.addEventListener('mousedown', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));
    cardTextoLacaios.addEventListener('mousedown', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));

    /*faz a animação do h2 e da img do card lacaios usando mouse  */
    cardLacaios.addEventListener('mousedown', () => efeitoCardCapa(lacaiosTitulo, lacaiosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, diversosTitulo, diversosImg));
    cardTextoLacaios.addEventListener('mousedown', () => efeitoCardCapa(lacaiosTitulo, lacaiosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, diversosTitulo, diversosImg));

    /*faz  animação do card  diversos usando mouse */
    cardDiversos.addEventListener('mousedown', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));
    cardTextoDiversos.addEventListener('mousedown', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));

    /*faz a animação do h2 e da img do card diversos usando mouse  */
    cardDiversos.addEventListener('mousedown', () => efeitoCardCapa(diversosTitulo, diversosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg));
    cardTextoDiversos.addEventListener('mousedown', () => efeitoCardCapa(diversosTitulo, diversosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg));

} else {
    /*animações do cards usando o touch em telas portateis */

    /*faz a animação do card pets usando touch  */
    cardPets.addEventListener('touchstart', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoPets.addEventListener('touchstart', () => ativaCard(cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));

    /*faz a animação do h2 e da img do card pets usando touch */
    cardPets.addEventListener('touchstart', () => efeitoCardCapa(petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoPets.addEventListener('touchstart', () => efeitoCardCapa(petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));


    /*faz a animação do card armas usando touch  */
    cardArmas.addEventListener('touchstart', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmas.addEventListener('touchstart', () => ativaCard(cardArmas, cardTextoArmas, cardPets, cardTextoPets, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));


    /*faz a animação do h2 e da img do card armas usando touch  */
    cardArmas.addEventListener('touchstart', () => efeitoCardCapa(armasTitulo, armasImg, petTitulo, petImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoArmas.addEventListener('touchstart', () => efeitoCardCapa(armasTitulo, armasImg, petTitulo, petImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));


    /*faz a animação do card armaduras usando touch  */
    cardArmaduras.addEventListener('touchstart', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoArmaduras.addEventListener('touchstart', () => ativaCard(cardArmaduras, cardTextoArmaduras, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));


    /*faz a animação do h2 e da img do card armaduras usando touch  */
    cardArmaduras.addEventListener('touchstart', () => efeitoCardCapa(armaduraTitulo, armaduraImg, petTitulo, petImg, armasTitulo, armasImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoArmaduras.addEventListener('touchstart', () => efeitoCardCapa(armaduraTitulo, armaduraImg, petTitulo, petImg, armasTitulo, armasImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));


    /*faz a animação do card ferramentas usando touch  */
    cardFerramentas.addEventListener('touchstart', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));
    cardTextoFerramentas.addEventListener('touchstart', () => ativaCard(cardFerramentas, cardTextoFerramentas, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardLacaios, cardTextoLacaios, cardDiversos, cardTextoDiversos));


    /*faz a animação do h2 e da img do card ferramentas usando touch  */
    cardFerramentas.addEventListener('touchstart', () => efeitoCardCapa(ferramentasTitulo, ferramentasImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));
    cardTextoFerramentas.addEventListener('touchstart', () => efeitoCardCapa(ferramentasTitulo, ferramentasImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, lacaiosTitulo, lacaiosImg, diversosTitulo, diversosImg));


    /*faz a animação do card lacaios usando touch  */
    cardLacaios.addEventListener('touchstart', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));
    cardTextoLacaios.addEventListener('touchstart', () => ativaCard(cardLacaios, cardTextoLacaios, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardDiversos, cardTextoDiversos));


    /*faz a animação do h2 e da img do card lacaios usando touch  */
    cardLacaios.addEventListener('touchstart', () => efeitoCardCapa(lacaiosTitulo, lacaiosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, diversosTitulo, diversosImg));
    cardTextoLacaios.addEventListener('touchstart', () => efeitoCardCapa(lacaiosTitulo, lacaiosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, diversosTitulo, diversosImg));


    /*faz a animação do card diversos usando touch  */
    cardDiversos.addEventListener('touchstart', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));
    cardTextoDiversos.addEventListener('touchstart', () => ativaCard(cardDiversos, cardTextoDiversos, cardPets, cardTextoPets, cardArmas, cardTextoArmas, cardArmaduras, cardTextoArmaduras, cardFerramentas, cardTextoFerramentas, cardLacaios, cardTextoLacaios));

    /*faz a animação do h2 e da img do card diversos usando touch  */
    cardDiversos.addEventListener('touchstart', () => efeitoCardCapa(diversosTitulo, diversosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg));
    cardTextoDiversos.addEventListener('touchstart', () => efeitoCardCapa(diversosTitulo, diversosImg, petTitulo, petImg, armasTitulo, armasImg, armaduraTitulo, armaduraImg, ferramentasTitulo, ferramentasImg, lacaiosTitulo, lacaiosImg));

}




