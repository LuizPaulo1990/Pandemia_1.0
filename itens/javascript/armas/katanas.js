const katanas = [
    {
        id: 1,
        nome: "Blade of the seven winds",
        atributo: "agilidade",
        penetração: 100,
        dano_minimo: 33,
        dano_maximo: 39,
        durabilidade: 2700,
        peso: 4.38,
        efeito: "sangramento",
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/7/7b/Icon_Japan_2hSword_Katana_variant_1.png/revision/latest?cb=20181211224156"
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
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/4/47/Icon_elder_katana.png/revision/latest?cb=20230625211352"
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
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/4/47/Icon_elder_katana.png/revision/latest?cb=20230625211352"
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
        efeito: "sangramento e arrancar",
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/4/47/Icon_elder_katana.png/revision/latest?cb=20230625211352"
    },

    {
        id: 5,
        nome: "Musashi's black blade",
        atributo: "agilidade",
        penetração: 13.5,
        dano_minimo: 74,
        dano_maximo: 89,
        durabilidade: 2700,
        peso: 4.38,
        efeito: "sangramento e lentidão",
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/9/97/Icon_Japan_2hSword_Katana_variant_3.png/revision/latest?cb=20230626152521"
    },

    {
        id: 6,
        nome: "Prince kraxu's curved blade",
        atributo: "agilidade",
        penetração: 14.85,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 2700,
        peso: 8.75,
        efeito: "sangramento",
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/e/ea/Icon_2h_legendary_katana_01.png/revision/latest?cb=20201003185650"
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
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/a/ac/Icon_2h_legendary_katana_03.png/revision/latest?cb=20201003185056"
    },

    {
        id: 8,
        nome: "Song of the minstrel",
        atributo: "agilidade",
        penetração: 13.5,
        dano_minimo: 50,
        dano_maximo: 59,
        durabilidade: 1350,
        peso: 3.06,
        efeito: "sangramento",
        imagem: "https://static.wikia.nocookie.net/conanexiles_gamepedia/images/d/de/Icon_2h_legendary_katana_04.png/revision/latest?cb=20201003185931"
    },
]


function mostraKatanas(){
    katanas.forEach(katana => {
        const card = document.createElement('div');
        card.classList.add('card');
        const subCard = document.createElement('div');
        subCard.classList.add('sub-card');
        const imagemCard = document.createElement('img');
        imagemCard.src = URL(`${katana.imagem}`);
        const nomeKatanaCard = document.createElement('h2');
        nomeKatanaCard.innerHTML = katana.nome
        subCard.appendChild(imagemCard)
        subCard.appendChild(nomeKatanaCard)
        card.appendChild(subCard);
    });
}

