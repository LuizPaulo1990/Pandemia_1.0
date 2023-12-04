const conteudoPrincipal = document.getElementById('conteudo-principal');
const btnKatanas = document.getElementById('katana-btn');
const btnAdagas = document.getElementById('adaga-btn');
const conteudoCard = document.getElementById('container-card');
const containerConteudo = document.getElementById('container-conteudo');




const katanas = [
    {
        id: 1,
        nome: "seven winds",
        atributo: "agilidade",
        penetração: 100,
        dano_minimo: 33,
        dano_maximo: 39,
        durabilidade: 2700,
        peso: 4.38,
        efeito: "sangramento",
        imagem: "img/itens_img/katanas-card-img/sete-ventos.webp"
    },

    {
        id: 2,
        nome: "Curved slayer",
        atributo: "agilidade",
        penetração: 13.5,
        dano_minimo: 71,
        dano_maximo: 85,
        durabilidade: 2700,
        peso: 4.38,
        efeito: "sangramento",
        imagem: "img/itens_img/katanas-card-img/katana-3-iguais.webp"
    },

    {
        id: 3,
        nome: "Graceful night",
        atributo: "agilidade",
        penetração: 14.18,
        dano_minimo: 64,
        dano_maximo: 77,
        durabilidade: 2700,
        peso: 1.00,
        efeito: "sangramento",
        imagem: "img/itens_img/katanas-card-img/katana-3-iguais.webp"
    },

    {
        id: 4,
        nome: "Jagged edge",
        atributo: "agilidade",
        penetração: 14.85,
        dano_minimo: 63,
        dano_maximo: 75,
        durabilidade: 2700,
        peso: 8.75,
        efeito: "s/executar",
        imagem: "img/itens_img/katanas-card-img/katana-3-iguais.webp"
    },

    {
        id: 5,
        nome: "Musashi's blade",
        atributo: "agilidade",
        penetração: 13.5,
        dano_minimo: 74,
        dano_maximo: 89,
        durabilidade: 2700,
        peso: 4.38,
        efeito: "s/lentidão",
        imagem: "img/itens_img/katanas-card-img/musashi.webp"
    },

    {
        id: 6,
        nome: " kraxu's blade",
        atributo: "agilidade",
        penetração: 14.85,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 2700,
        peso: 8.75,
        efeito: "sangramento",
        imagem: "img/itens_img/katanas-card-img/katana-principe.webp"
    },

    {
        id: 7,
        nome: "Silent slash",
        atributo: "agilidade",
        penetração: 13.5,
        dano_minimo: 50,
        dano_maximo: 59,
        durabilidade: 1350,
        peso: 3.06,
        efeito: "sangramento",
        imagem: "img/itens_img/katanas-card-img/katana-coracao-gelado.webp"
    },

    {
        id: 8,
        nome: "Song minstrel",
        atributo: "agilidade",
        penetração: 13.5,
        dano_minimo: 50,
        dano_maximo: 59,
        durabilidade: 1350,
        peso: 3.06,
        efeito: "sangramento",
        imagem: "img/itens_img/katanas-card-img/katana-minestrel.webp"
    },
]

const adagas = [

    {
        id: 1,
        nome: "Akbitanan Blades",
        atributo: "agilidade",
        penetração: 18,
        dano_minimo: 44,
        dano_maximo: 49,
        durabilidade: 3600,
        peso: 2.45,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/Akbitanan-Blades.webp"
    },
    {
        id: 2,
        nome: "Brutish Daggers",
        atributo: "agilidade",
        penetração: 16.2,
        dano_minimo: 28,
        dano_maximo: 28,
        durabilidade: 810,
        peso: 2.82,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/brutish-adaga.webp"
    },
    {
        id: 3,
        nome: "Thousand Bites",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 31,
        dano_maximo: 35,
        durabilidade: 750,
        peso: 2.70,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/mil-mordidas-adaga.webp"
    },
    {
        id: 4,
        nome: "Nameless Days",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 46,
        dano_maximo: 55,
        durabilidade: 3600,
        peso: 2.45,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/mil-mordidas-adaga.webp"
    },
    {
        id: 5,
        nome: "Diseased Knives",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 45,
        dano_maximo: 50,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lent/adoecer",
        imagem: "img/itens_img/adagas-card-img/Diseased-Knives.webp"
    },
    {
        id: 6,
        nome: "Goblinfangs",
        atributo: "agilidade",
        penetração: 18,
        dano_minimo: 35,
        dano_maximo: 38,
        durabilidade: 900,
        peso: 1.72,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/goblin-fangs.webp"
    },
    {
        id: 7,
        nome: "Gremlinfangs",
        atributo: "agilidade",
        penetração: 20.7,
        dano_minimo: 50,
        dano_maximo: 55,
        durabilidade: 600,
        peso: 2.45,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/gremlin-fangs.webp"
    },
    {
        id: 8,
        nome: "Heartsblood",
        atributo: "agilidade",
        penetração: 19.8,
        dano_minimo: 44,
        dano_maximo: 49,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lent/executar",
        imagem: "img/itens_img/adagas-card-img/gremlin-fangs.webp"
    },
    {
        id: 9,
        nome: "Heartsblood",
        atributo: "agilidade",
        penetração: 19.8,
        dano_minimo: 44,
        dano_maximo: 49,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lent/executar",
        imagem: "img/itens_img/adagas-card-img/gremlin-fangs.webp"
    },
    {
        id: 10,
        nome: "Jhebbal Sag's",
        atributo: "agilidade",
        penetração: 19.8,
        dano_minimo: 44,
        dano_maximo: 49,
        durabilidade: 1800,
        peso: 4.90,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/Jhebbal-Sag's.webp"
    },
    {
        id: 11,
        nome: "Lloigor Fang",
        atributo: "agilidade",
        penetração: 18,
        dano_minimo: 46,
        dano_maximo: 51,
        durabilidade: 7200,
        peso: 2.45,
        efeito: "s/lent/envenenar",
        imagem: "img/itens_img/adagas-card-img/brutish-adaga.webp"
    },
    {
        id: 12,
        nome: "Misha's Bite",
        atributo: "agilidade",
        penetração: 16.2,
        dano_minimo: 28,
        dano_maximo: 31,
        durabilidade: 900,
        peso: 2.21,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/gremlin-fangs.webp"
    },
    {
        id: 13,
        nome: "Nkosi's Daggers",
        atributo: "agilidade",
        penetração: 18,
        dano_minimo: 52,
        dano_maximo: 58,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/mil-mordidas-adaga.webp"
    },
    {
        id: 14,
        nome: "Pristine Khari ",
        atributo: "agilidade",
        penetração: 18,
        dano_minimo: 44,
        dano_maximo: 49,
        durabilidade: 3600,
        peso: 2.45,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/Pristine-Khari.webp"
    },
    {
        id: 15,
        nome: "Set's Tongue",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 45,
        dano_maximo: 50,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lent/pilhagem",
        imagem: "img/itens_img/adagas-card-img/Set's-Tongu.webp"
    },
    {
        id: 16,
        nome: "The Grim",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 31,
        dano_maximo: 35,
        durabilidade: 750,
        peso: 2.70,
        efeito: "s/lent/escala dano",
        imagem: "img/itens_img/adagas-card-img/The-Grim.webp"
    },
    {
        id: 17,
        nome: "The Shank",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 45,
        dano_maximo: 50,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lentidão",
        imagem: "img/itens_img/adagas-card-img/mil-mordidas-adaga.webp"
    },
    {
        id: 18,
        nome: "Zhaibar Knives",
        atributo: "agilidade",
        penetração: 18.9,
        dano_minimo: 45,
        dano_maximo: 50,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lent/adoecer",
        imagem: "img/itens_img/adagas-card-img/Jhebbal-Sag's.webp"
    },
]

function geraCard(array, container) {

    array.forEach((itens) => {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const titulo = document.createElement('h3');
        titulo.classList.add('titulo-card');
        titulo.innerHTML = itens.nome;
        card.appendChild(titulo);

        const imagem = document.createElement('img');
        imagem.src = itens.imagem;
        imagem.classList.add('imagem-card');
        card.appendChild(imagem);

        const atributo = document.createElement('p');
        atributo.innerHTML = 'atributo: ';
        const atributoSpan = document.createElement('span');
        atributoSpan.innerHTML = itens.atributo;
        atributo.appendChild(atributoSpan);
        card.appendChild(atributo);

        const danoMinimo = document.createElement('p');
        danoMinimo.innerHTML = 'dano mínimo: ';
        const danoMinimoSpan = document.createElement('span');
        danoMinimoSpan.innerHTML = itens.dano_minimo;
        danoMinimo.appendChild(danoMinimoSpan);
        card.appendChild(danoMinimo);

        const danoMaximo = document.createElement('p');
        danoMaximo.innerHTML = 'dano máximo: ';
        const danoMaximoSpan = document.createElement('span');
        danoMaximoSpan.innerHTML = itens.dano_maximo;
        danoMaximo.appendChild(danoMaximoSpan);
        card.appendChild(danoMaximo);

        const penetracao = document.createElement('p');
        penetracao.innerHTML = 'penetração: ';
        const penetracaoSpan = document.createElement('span');
        penetracaoSpan.innerHTML = itens.penetração + '%';
        penetracao.appendChild(penetracaoSpan);
        card.appendChild(penetracao);


        const efeito = document.createElement('p');
        efeito.innerHTML = 'efeito: ';
        const efeitoSpan = document.createElement('span');
        efeitoSpan.innerHTML = itens.efeito;
        efeito.appendChild(efeitoSpan);
        card.appendChild(efeito);



        const durabilidade = document.createElement('p');
        durabilidade.innerHTML = 'durabilidade: ';
        const durabilidadeSpan = document.createElement('span');
        durabilidadeSpan.innerHTML = itens.durabilidade;
        durabilidade.appendChild(durabilidadeSpan);
        card.appendChild(durabilidade);

        const peso = document.createElement('p');
        peso.innerHTML = 'peso: ';
        const pesoSpan = document.createElement('span');
        pesoSpan.innerHTML = itens.peso;
        peso.appendChild(pesoSpan);
        card.appendChild(peso);

        const btnAddCarrinho = document.createElement('button');
        btnAddCarrinho.classList.add('btn-add');
        const btnImagem = document.createElement('img');
        btnImagem.src = "img/itens_img/bau.png";
        btnAddCarrinho.appendChild(btnImagem);
        card.appendChild(btnAddCarrinho);


    })
}




function geraContainerArmas(armas) {
    conteudoPrincipal.style.opacity = 0;
    containerConteudo.style.display = 'flex';
    const btnFecha = document.createElement('button');
    btnFecha.innerHTML = 'X';
    btnFecha.classList.add('btn-fecha');
    containerConteudo.appendChild(btnFecha);
    const containerCard = document.createElement('div');
    containerCard.classList.add('container-card');
    containerConteudo.appendChild(containerCard);



    geraCard(armas, containerCard);


    setInterval(() => {
        containerConteudo.style.opacity = 1;
    }, 1000)

    btnFecha.addEventListener("click", () => {
        containerConteudo.style.display = 'none';
        containerCard.innerHTML = '';
        containerConteudo.innerHTML = '';
        conteudoPrincipal.style.opacity = 1;
    })

}





btnKatanas.addEventListener('click', () => geraContainerArmas(katanas));
btnAdagas.addEventListener('click', () => geraContainerArmas(adagas));

