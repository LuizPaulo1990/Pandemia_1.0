const conteudoPrincipal = document.getElementById('conteudo-principal');
const btnKatanas = document.getElementById('katana-btn');
const btnAdagas = document.getElementById('adaga-btn');
const btnEspadaUmaMao = document.getElementById('espada-btn');
const btnEspadasCurtas = document.getElementById('espada-curta-btn');
const btnEspadasDuasMaos = document.getElementById('espada-grande-btn');
const btnMachadoUmaMao = document.getElementById('machado-btn');
const btnMachadoDuasMaos = document.getElementById('machado-grande-btn');
const btnMacaUmaMao = document.getElementById('maca-btn');
const btnMacaDuasMaos = document.getElementById('maca-grande-btn');
const btnLanca = document.getElementById('lanca-btn');
const brnArcos = document.getElementById('arco-btn');
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
        nome: "Hound Fang",
        atributo: "agilidade",
        penetração: 18,
        dano_minimo: 52,
        dano_maximo: 58,
        durabilidade: 1800,
        peso: 2.45,
        efeito: "s/lent/executar",
        imagem: "img/itens_img/adagas-card-img/brutish-adaga.webp"
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

const espadaUmamao = [
    {
        id: 1,
        nome: "Balias",
        atributo: "força",
        penetração: 9,
        dano_minimo: 67,
        dano_maximo: 77,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "corrupção/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_02.webp"
    },
    {
        id: 2,
        nome: "Boatswain Hook",
        atributo: "força",
        penetração: 8.55,
        dano_minimo: 46,
        dano_maximo: 52,
        durabilidade: 1350,
        peso: 2.45,
        efeito: "sang/lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_HookSword.webp"
    },
    {
        id: 3,
        nome: "Calandra Sword",
        atributo: "força",
        penetração: 6.3,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2160,
        peso: 3.50,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_derketo_sword.webp"
    },
    {
        id: 4,
        nome: "Drunkard Blade",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_01.webp"
    },
    {
        id: 5,
        nome: "Dueling Hawk",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "lentidão/força",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_04.webp"
    },
    {
        id: 6,
        nome: "El's Drinker",
        atributo: "força",
        penetração: 9,
        dano_minimo: 67,
        dano_maximo: 77,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "sangramento/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_02.webp"
    },
    {
        id: 7,
        nome: "Executioner Blade",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "executar/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_dragonbone_sword.webp"
    },
    {
        id: 8,
        nome: "Eye Watcher",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 36,
        dano_maximo: 41,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "rest frio/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_sewerbeast_sword.webp"
    },
    {
        id: 9,
        nome: "Ghast Sword",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 51,
        dano_maximo: 59,
        durabilidade: 2700,
        peso: 0.10,
        efeito: "corrupção/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_WightSword.webp"
    },
    {
        id: 10,
        nome: "Lloigor Fang",
        atributo: "força",
        penetração: 9,
        dano_minimo: 59,
        dano_maximo: 68,
        durabilidade: 10800,
        peso: 3.50,
        efeito: "envenenar/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_dragonbone_sword.webp"
    },
    {
        id: 11,
        nome: "Pristine Khari ",
        atributo: "força",
        penetração: 9.9,
        dano_minimo: 59,
        dano_maximo: 68,
        durabilidade: 2700,
        peso: 7.00,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_shadow_sword.webp"
    },
    {
        id: 12,
        nome: "Seasalt Cutlass",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 39,
        dano_maximo: 45,
        durabilidade: 1125,
        peso: 3.85,
        efeito: "sangramento/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_cutlass.webp"
    },
    {
        id: 13,
        nome: "Specter Bane",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "dano espectral/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_02.webp"
    },
    {
        id: 14,
        nome: "Sword Ruka",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 39,
        dano_maximo: 45,
        durabilidade: 1125,
        peso: 3.85,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_serpentmen_sword_Gold.webp"
    },
    {
        id: 15,
        nome: "Khosatral Khel",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_05.webp"
    },
    {
        id: 16,
        nome: "Predatory Blade",
        atributo: "força",
        penetração: 9,
        dano_minimo: 108,
        dano_maximo: 1,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "lent/predador",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_04.webp"
    },
    {
        id: 17,
        nome: "The Wightblade",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 3.50,
        efeito: "dano fantasma/lent",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_03.webp"
    },
    {
        id: 18,
        nome: "Amir Khurum",
        atributo: "agilidade",
        penetração: 9.9,
        dano_minimo: 59,
        dano_maximo: 68,
        durabilidade: 2700,
        peso: 7.00,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-uma-mao-img/Icon_legendary_sword_01.webp"
    },
]

const espadasCurtas = [
    {
        id: 1,
        nome: "Alligator Bite",
        atributo: "agilidade",
        penetração: 19.8,
        dano_minimo: 74,
        dano_maximo: 81,
        durabilidade: 2700,
        peso: 5.25,
        efeito: "sang/executar",
        imagem: "img/itens_img/espadas-curtas-img/Icon_elder_shortsword.webp"
    },
    {
        id: 2,
        nome: "Render",
        atributo: "agilidade",
        penetração: 19.8,
        dano_minimo: 74,
        dano_maximo: 81,
        durabilidade: 2700,
        peso: 5.25,
        efeito: "sang/lentidão",
        imagem: "img/itens_img/espadas-curtas-img/Icon_gladius_iron.webp"
    },
    {
        id: 3,
        nome: "Champions Sword",
        atributo: "agilidade",
        penetração: 20.7,
        dano_minimo: 83,
        dano_maximo: 91,
        durabilidade: 900,
        peso: 2.63,
        efeito: "sangramento",
        imagem: "img/itens_img/espadas-curtas-img/Icon_elder_shortsword.webp"
    },
]

const espadasDuasMaos = [
    {
        id: 1,
        nome: "Annihilator",
        atributo: "força",
        penetração: 33.75,
        dano_minimo: 75,
        dano_maximo: 90,
        durabilidade: 3600,
        peso: 5.25,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_venom_2h_sword2.webp"
    },
    {
        id: 2,
        nome: "Baal-pteor Razor",
        atributo: "agilidade",
        penetração: 23.63,
        dano_minimo: 75,
        dano_maximo: 90,
        durabilidade: 3600,
        peso: 0.10,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_legendary_2hSword_01.webp"
    },
    {
        id: 3,
        nome: " Adventurer Blade",
        atributo: "agilidade",
        penetração: 15.75,
        dano_minimo: 74,
        dano_maximo: 89,
        durabilidade: 2880,
        peso: 5.25,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_legendary_2hSword_02.webp"
    },
    {
        id: 4,
        nome: "Betrayer Blade",
        atributo: "força",
        penetração: 15.75,
        dano_minimo: 68,
        dano_maximo: 81,
        durabilidade: 3600,
        peso: 5.25,
        efeito: "lent/sangramento",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_obsidian_2h_sword.webp"
    },
    {
        id: 5,
        nome: "Jedias Greatsaber",
        atributo: "força",
        penetração: 23.63,
        dano_minimo: 71,
        dano_maximo: 86,
        durabilidade: 3600,
        peso: 5.25,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_legendary_2hSword_04.webp"
    },
    {
        id: 6,
        nome: "Reaver Legacy",
        atributo: "força",
        penetração: 23.63,
        dano_minimo: 79,
        dano_maximo: 95,
        durabilidade: 3600,
        peso: 5.25,
        efeito: "lent/separar",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_acheron_2h_sword.webp"
    },
    {
        id: 7,
        nome: "Mastodon Killer",
        atributo: "força",
        penetração: 22.50,
        dano_minimo: 83,
        dano_maximo: 100,
        durabilidade: 3600,
        peso: 5.25,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_2h_khari_sword.webp"
    },
    {
        id: 8,
        nome: "Crom Sword",
        atributo: "força",
        penetração: 22.50,
        dano_minimo: 107,
        dano_maximo: 128,
        durabilidade: 1800,
        peso: 5.25,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_legendary_2hSword_03.webp"
    },
    {
        id: 9,
        nome: "Papyrus Blade",
        atributo: "força",
        penetração: 24.75,
        dano_minimo: 74,
        dano_maximo: 88,
        durabilidade: 3600,
        peso: 10.50,
        efeito: "lent/corte papel",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_legendary_2hSword_03.webp"
    },
    {
        id: 10,
        nome: "The Watchblade",
        atributo: "força",
        penetração: 22.50,
        dano_minimo: 74,
        dano_maximo: 88,
        durabilidade: 14400,
        peso: 5.25,
        efeito: "lentidão",
        imagem: "img/itens_img/espadas-duas-maos-img/Icon_legendary_2hSword_05.webp"
    },
]

const machadosUmaMao = [
    {
        id: 1,
        nome: "Act of Violence",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_ancient_axe.webp"
    },
    {
        id: 2,
        nome: "Bear Axe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_khari_axe.webp"
    },
    {
        id: 3,
        nome: "Gate Guardian",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo/separar",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_02.webp"
    },
    {
        id: 4,
        nome: "the Lion",
        atributo: "força",
        penetração: 0,
        dano_minimo: 103,
        dano_maximo: 1,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo/predador",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_02.webp"
    },
    {
        id: 5,
        nome: "the Berserkers",
        atributo: "força",
        penetração: 0,
        dano_minimo: 64,
        dano_maximo: 70,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo/separar",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_04.webp"
    },
    {
        id: 6,
        nome: "Corrupted Axe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 64,
        dano_maximo: 70,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo/corrupção",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_04.webp"
    },
    {
        id: 7,
        nome: "Executioner's Axe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 64,
        dano_maximo: 70,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/executar",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_dragonbone_waraxe.webp"
    },
    {
        id: 8,
        nome: "Ghast Axe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 64,
        dano_maximo: 70,
        durabilidade: 2700,
        peso: 0.10,
        efeito: "lent/sang/esmaga escudo/corrupção",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_WightAxe.webp"
    },
    {
        id: 9,
        nome: "Glimmermoon",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 2700,
        peso: 1.00,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_03.webp"
    },
    {
        id: 10,
        nome: "Raging Axe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_khari_axe.webp"
    },
    {
        id: 11,
        nome: "Razor-sharp",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 900,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_elder_waraxe.webp"
    },
    {
        id: 12,
        nome: "Razor-sharp",
        atributo: "força",
        penetração: 0,
        dano_minimo: 71,
        dano_maximo: 78,
        durabilidade: 900,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_elder_waraxe.webp"
    },
    {
        id: 13,
        nome: "Reaver's Axe",
        atributo: "força",
        penetração: 15,
        dano_minimo: 63,
        dano_maximo: 69,
        durabilidade: 2700,
        peso: 8.05,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_01.webp"
    },
    {
        id: 14,
        nome: "Severer",
        atributo: "força",
        penetração: 0,
        dano_minimo: 63,
        dano_maximo: 69,
        durabilidade: 900,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_elder_waraxe.webp"
    },
    {
        id: 15,
        nome: "Spectral Axe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 43,
        dano_maximo: 47,
        durabilidade: 'infinita',
        peso: 3.62,
        efeito: "lent/sang/esmaga escudo/corrupção",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_WightAxe.webp"
    },
    {
        id: 16,
        nome: "Strangely Familiar ",
        atributo: "força",
        penetração: 0,
        dano_minimo: 67,
        dano_maximo: 73,
        durabilidade: 900,
        peso: 8.05,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_05.webp"
    },
    {
        id: 17,
        nome: "Festering One",
        atributo: "força",
        penetração: 0,
        dano_minimo: 64,
        dano_maximo: 70,
        durabilidade: 900,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo/envenenar",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_05.webp"
    },
    {
        id: 18,
        nome: "The Mallet",
        atributo: "força",
        penetração: 0,
        dano_minimo: 51,
        dano_maximo: 56,
        durabilidade: 2700,
        peso: 4.03,
        efeito: "lent/sang/esmaga escudo",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_repair_hammer_star_metal.webp"
    },
    {
        id: 19,
        nome: "Yog's Touch",
        atributo: "força",
        penetração: 28.35,
        dano_minimo: 60,
        dano_maximo: 66,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "lent/sang/esmaga escudo/ corrupção",
        imagem: "img/itens_img/machado-uma-mao-img/Icon_legendary_waraxe_04.webp"
    },
]

const machadosDuasMaos = [
    {
        id: 1,
        nome: "Morning Sun",
        atributo: "força",
        penetração: 0,
        dano_minimo: 88,
        dano_maximo: 106,
        durabilidade: 4200,
        peso: 10.50,
        efeito: "lent/separar",
        imagem: "img/itens_img/machado-duas-maos-img/Icon_2hAxe_iron.webp"
    },
    {
        id: 2,
        nome: "Thag Scythe",
        atributo: "força",
        penetração: 0,
        dano_minimo: 90,
        dano_maximo: 108,
        durabilidade: 4200,
        peso: 5.25,
        efeito: "lent/sangramento",
        imagem: "img/itens_img/machado-duas-maos-img/Icon_shadow_scythe.webp"
    },
    {
        id: 2,
        nome: "The Beak",
        atributo: "força",
        penetração: 49.50,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 4200,
        peso: 10.50,
        efeito: "lent/sangramento",
        imagem: "img/itens_img/machado-duas-maos-img/Icon_shadow_scythe.webp"
    },
]

const macaUmaMao = [
    {
        id: 1,
        nome: "Aja's Bane",
        atributo: "força",
        penetração: 28.35,
        dano_minimo: 60,
        dano_maximo: 66,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_03.webp"
    },
    {
        id: 2,
        nome: "Ghoul Bone",
        atributo: "força",
        penetração: 27,
        dano_minimo: 67,
        dano_maximo: 73,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_stone_club-1.webp"
    },
    {
        id: 3,
        nome: "Ghoulish Club",
        atributo: "força",
        penetração: 27,
        dano_minimo: 67,
        dano_maximo: 73,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar/envenenar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_shadow_mace.webp"
    },
    {
        id: 4,
        nome: "Heated Argument",
        atributo: "força",
        penetração: 28.35,
        dano_minimo: 60,
        dano_maximo: 66,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar/aquecida",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_04.webp"
    },
    {
        id: 5,
        nome: "amorosa",
        atributo: "força",
        penetração: 28.35,
        dano_minimo: 'concusão Dmg 30',
        dano_maximo: 'concusão Dmg 45',
        durabilidade: 6600,
        peso: 4.55,
        efeito: "esmaga escudo/separar/concusão",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_02.webp"
    },
    {
        id: 6,
        nome: "Thag Mace",
        atributo: "força",
        penetração: 25.65,
        dano_minimo: 46,
        dano_maximo: 50,
        durabilidade: 1650,
        peso: 3.19,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_shadow_mace.webp"
    },
    {
        id: 7,
        nome: "Mitra's Justice",
        atributo: "força",
        penetração: 28.35,
        dano_minimo: 60,
        dano_maximo: 66,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar/pilhagem",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_01.webp"
    },
    {
        id: 8,
        nome: "Momentum",
        atributo: "força",
        penetração: 27,
        dano_minimo: 85,
        dano_maximo: 94,
        durabilidade: 3300,
        peso: 9.10,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_01.webp"
    },
    {
        id: 9,
        nome: "Nortis",
        atributo: "força",
        penetração: 27,
        dano_minimo: 67,
        dano_maximo: 73,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar/corrupção",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_04.webp"
    },
    {
        id: 10,
        nome: "Quake",
        atributo: "força",
        penetração: 27,
        dano_minimo: 67,
        dano_maximo: 73,
        durabilidade: 3300,
        peso: 4.55,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_03.webp"
    },
    {
        id: 11,
        nome: "Brittle Bastard",
        atributo: "força",
        penetração: 21.6,
        dano_minimo: 65,
        dano_maximo: 71,
        durabilidade: 400,
        peso: 5.01,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_05.webp"
    },
    {
        id: 12,
        nome: "The Unintelligible",
        atributo: "força",
        penetração: 29.16,
        dano_minimo: 63,
        dano_maximo: 69,
        durabilidade: 1100,
        peso: 9.10,
        efeito: "esmaga escudo/separar",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_legendary_mace_04.webp"
    },
    {
        id: 13,
        nome: "The Wyrd",
        atributo: "força",
        penetração: 29.7,
        dano_minimo: 'concusão Dmg 20',
        dano_maximo: 'concusão Dmg 20',
        durabilidade: 3300,
        peso: 9.10,
        efeito: "esmaga escudo/separar/concusão",
        imagem: "img/itens_img/maças-uma-mao-img/Icon_stone_club-1.webp"
    },
]

const macaDuasMaos = [
    {
        id: 1,
        nome: "Abyssal Maul",
        atributo: "força",
        penetração: 47.25,
        dano_minimo: 85,
        dano_maximo: 102,
        durabilidade: 100,
        peso: 4.55,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_demon_2h_maul.webp"
    },
    {
        id: 2,
        nome: "Baalp Lodestone",
        atributo: "força",
        penetração: 47.25,
        dano_minimo: 68,
        dano_maximo: 81,
        durabilidade: 4800,
        peso: 0.10,
        efeito: "separar/concusão",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_04.webp"
    },
    {
        id: 3,
        nome: "Bec-de-Corbin",
        atributo: "força",
        penetração: 49.5,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 4800,
        peso: 10.50,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_03.webp"
    },
    {
        id: 4,
        nome: "Crom's Hammer",
        atributo: "força",
        penetração: 0,
        dano_minimo: 79,
        dano_maximo: 95,
        durabilidade: 4800,
        peso: 2.63,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_02.webp"
    },
    {
        id: 5,
        nome: "Doom",
        atributo: "força",
        penetração: 49.5,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 4800,
        peso: 10.50,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_2h_doom_hammer.webp"
    },
    {
        id: 6,
        nome: "Evening Star",
        atributo: "força",
        penetração: 49.5,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 4800,
        peso: 3.00,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_01.webp"
    },
    {
        id: 7,
        nome: "Forgelight",
        atributo: "força",
        penetração: 47.25,
        dano_minimo: 68,
        dano_maximo: 81,
        durabilidade: 4800,
        peso: 5.25,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_02.webp"
    },
    {
        id: 8,
        nome: "Thag Hammer",
        atributo: "força",
        penetração: 45,
        dano_minimo: 65,
        dano_maximo: 65,
        durabilidade: 4800,
        peso: 5.25,
        efeito: "separar/corrupção",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_smokemonster.webp"
    },
    {
        id: 9,
        nome: "Hanuman Gada",
        atributo: "força",
        penetração: 45,
        dano_minimo: 96,
        dano_maximo: 115,
        durabilidade: 4800,
        peso: 50.00,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_01.webp"
    },
    {
        id: 10,
        nome: "Maelstrom",
        atributo: "força",
        penetração: 0,
        dano_minimo: 79,
        dano_maximo: 95,
        durabilidade: 4800,
        peso: 2.63,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_02.webp"
    },
    {
        id: 11,
        nome: "Morda",
        atributo: "força",
        penetração: 49.5,
        dano_minimo: 69,
        dano_maximo: 83,
        durabilidade: 4800,
        peso: 10.50,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_serpentmen_warhammer.webp"
    },
    {
        id: 12,
        nome: "Rage Hammer",
        atributo: "força",
        penetração: 47.25,
        dano_minimo: 68,
        dano_maximo: 81,
        durabilidade: 4800,
        peso: 10.00,
        efeito: "separar/berserker",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_01.webp"
    },
    {
        id: 13,
        nome: "Ranissan",
        atributo: "força",
        penetração: 45,
        dano_minimo: 79,
        dano_maximo: 94,
        durabilidade: 4800,
        peso: 5.25,
        efeito: "separar/corrupção",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_05.webp"
    },
    {
        id: 14,
        nome: "Tsotha-lanti",
        atributo: "força",
        penetração: 45,
        dano_minimo: 66,
        dano_maximo: 79,
        durabilidade: 9600,
        peso: 5.25,
        efeito: "separar/lentidão",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_legendary_hammer_05.webp"
    },
    {
        id: 15,
        nome: "World Breaker",
        atributo: "força",
        penetração: 67.5,
        dano_minimo: 68,
        dano_maximo: 81,
        durabilidade: 4800,
        peso: 5.25,
        efeito: "separar",
        imagem: "img/itens_img/maças-duas-maos-img/Icon_cimmerian_steel_hammer_variant.webp"
    },
    
    
]

const lancasDuasMaos = [
    {
        id: 1,
        nome: "Ator's Pike",
        atributo: "força",
        penetração: 9,
        dano_minimo: 47,
        dano_maximo: 56,
        durabilidade: 2100,
        peso: 3.06,
        efeito: "sang/lentidão/alcance",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_hardened_steel_spear.webp"
    },
    {
        id: 2,
        nome: "Black Dragon",
        atributo: "agilidade",
        penetração: 7.2,
        dano_minimo: 65,
        dano_maximo: 78,
        durabilidade: 1120,
        peso: 4.81,
        efeito: "sang/lentidão/alcance",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_03.webp"
    },
    {
        id: 3,
        nome: "Gavain's Rusty",
        atributo: "força",
        penetração: 9.9,
        dano_minimo: 59,
        dano_maximo: 71,
        durabilidade: 4200,
        peso: 8.75,
        efeito: "sang/lentidão/alcance/adoecer",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_02.webp"
    },
    {
        id: 4,
        nome: "Ghoulish",
        atributo: "força",
        penetração: 9,
        dano_minimo: 47,
        dano_maximo: 56,
        durabilidade: 2100,
        peso: 3.06,
        efeito: "sang/lentidão/alcance/envenenar",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_envenomed_pike.webp"
    },
    {
        id: 5,
        nome: "Infectious Reach",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 54,
        dano_maximo: 65,
        durabilidade: 4200,
        peso: 4.38,
        efeito: "sang/lentidão/alcance/envenenar",
        imagem: "img/itens_img/lança-duas-maos-img/Epic_icon_elder_spear.webp"
    },
    {
        id: 6,
        nome: "Lifeblood Spear",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 72,
        durabilidade: 4200,
        peso: 4.38,
        efeito: "sang/lentidão/alcance",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_05.webp"
    },
    {
        id: 7,
        nome: "Lloigor Fang",
        atributo: "força",
        penetração: 9,
        dano_minimo: 59,
        dano_maximo: 71,
        durabilidade: 16800,
        peso: 4.38,
        efeito: "sang/lentidão/alcance/envenenar",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_dragonbone_spear.webp"
    },
    {
        id: 8,
        nome: "Mordlun",
        atributo: "força",
        penetração: 9,
        dano_minimo: 67,
        dano_maximo: 80,
        durabilidade: 4200,
        peso: 4.38,
        efeito: "sang/lentidão/alcance/corrupção",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_mitra_spear.webp"
    },
    {
        id: 9,
        nome: "Prince Kraxus",
        atributo: "força",
        penetração: 9.9,
        dano_minimo: 59,
        dano_maximo: 71,
        durabilidade: 4200,
        peso: 8.75,
        efeito: "sang/lentidão/alcance",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_serpentmen_spear.webp"
    },
    {
        id: 10,
        nome: "taff of Hanuman",
        atributo: "força",
        penetração: 9.9,
        dano_minimo: 36,
        dano_maximo: 43,
        durabilidade: 4200,
        peso: 8.75,
        efeito: "sang/lentidão/alcance/concusão",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_05.webp"
    },
    {
        id: 11,
        nome: "The Impaler",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 72,
        durabilidade: 4200,
        peso: 4.38,
        efeito: "sang/lentidão/alcance/arrancar",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_04.webp"
    },
    {
        id: 12,
        nome: "Vaulting Pole",
        atributo: "agilidade",
        penetração: 9.45,
        dano_minimo: 60,
        dano_maximo: 72,
        durabilidade: 4200,
        peso: 4.38,
        efeito: "sang/lentidão/alcance",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_05.webp"
    },
    {
        id: 13,
        nome: "Warspear Circle",
        atributo: "força",
        penetração: 8.1,
        dano_minimo: 51,
        dano_maximo: 61,
        durabilidade: 4200,
        peso: 4.38,
        efeito: "sang/lentidão/alcance",
        imagem: "img/itens_img/lança-duas-maos-img/Icon_legendary_pike_01.webp"
    },
]

const arcos = [
    {
        id: 1,
        nome: "Abyssal Bow",
        atributo: "agilidade",
        penetração: 9.45,
        dano_minimo: 33,
        dano_maximo: 33,
        durabilidade: 100,
        peso: 0.10,
        efeito: "nenhuma",
        imagem: "img/itens_img/arcos-img/Icon_demon_bow.webp"
    },
    {
        id: 2,
        nome: "Bessie's Bow",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 26,
        dano_maximo: 26,
        durabilidade: 3000,
        peso: 3.50,
        efeito: "rouba stamina",
        imagem: "img/itens_img/arcos-img/Icon_legendary_bow_02.webp"
    },
    {
        id: 3,
        nome: "Bite Huntress",
        atributo: "agilidade",
        penetração: 9,
        dano_minimo: 20,
        dano_maximo: 20,
        durabilidade: 1500,
        peso: 2.45,
        efeito: "nenhuma",
        imagem: "img/itens_img/arcos-img/Icon_legendary_bow_03.webp"
    },
    {
        id: 4,
        nome: "BloodMoon Bow",
        atributo: "agilidade",
        penetração: 0,
        dano_minimo: 33,
        dano_maximo: 33,
        durabilidade: 3000,
        peso: 3.50,
        efeito: "nenhuma",
        imagem: "img/itens_img/arcos-img/Icon_bloodmoon_bow.webp"
    },
    {
        id: 5,
        nome: "Derketo's Voice",
        atributo: "força",
        penetração: 0,
        dano_minimo: 33,
        dano_maximo: 33,
        durabilidade: 4400,
        peso: 4.20,
        efeito: "rouba stamina",
        imagem: "img/itens_img/arcos-img/Icon_legendary_bow_03.webp"
    },
    {
        id: 6,
        nome: "Eye Khan",
        atributo: "força",
        penetração: 9.45,
        dano_minimo: 26,
        dano_maximo: 26,
        durabilidade: 3000,
        peso: 3.50,
        efeito: "rouba stamina",
        imagem: "img/itens_img/arcos-img/Icon_legendary_bow_01.webp"
    },
    {
        id: 7,
        nome: "Fling Shot",
        atributo: "agilidade",
        penetração: 9.45,
        dano_minimo: 1,
        dano_maximo: 1,
        durabilidade: 20,
        peso: 3.50,
        efeito: "nenhum",
        imagem: "img/itens_img/arcos-img/Icon_khari_bow.webp"
    },
    {
        id: 8,
        nome: "Frostshot",
        atributo: "agilidade",
        penetração: 9.9,
        dano_minimo: 26,
        dano_maximo: 26,
        durabilidade: 3000,
        peso: 7.00,
        efeito: "nenhum",
        imagem: "img/itens_img/arcos-img/Icon_legendary_bow_03.webp"
    },
    {
        id: 9,
        nome: "Frostshot",
        atributo: "agilidade",
        penetração: 9.9,
        dano_minimo: 26,
        dano_maximo: 26,
        durabilidade: 3000,
        peso: 7.00,
        efeito: "nenhum",
        imagem: "img/itens_img/arcos-img/Icon_legendary_bow_03.webp"
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
        btnImagem.src = "img/itens_img/bolsa-de-dinheiro.png";
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

btnEspadaUmaMao.addEventListener('click', () => geraContainerArmas(espadaUmamao));

btnEspadasCurtas.addEventListener('click', () => geraContainerArmas(espadasCurtas));

btnEspadasDuasMaos.addEventListener('click', () => geraContainerArmas(espadasDuasMaos));

btnMachadoUmaMao.addEventListener('click', () => geraContainerArmas(machadosUmaMao));

btnMachadoDuasMaos.addEventListener('click', () => geraContainerArmas(machadosDuasMaos));

btnMacaUmaMao.addEventListener('click', () => geraContainerArmas(macaUmaMao));

btnMacaDuasMaos.addEventListener('click', () => geraContainerArmas(macaDuasMaos));

btnLanca.addEventListener('click', () => geraContainerArmas(lancasDuasMaos));

brnArcos.addEventListener('click', () => geraContainerArmas(arcos));

