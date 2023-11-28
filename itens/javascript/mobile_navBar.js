class NavbarCelular {
    constructor(celularMenu, navLista, navLinks){
        this.celularMenu = document.querySelector(celularMenu);
        this.navLista = document.querySelector(navLista);
        this.navLinks= document.querySelectorAll(navLinks);
        this.classeAtivada = "ativada";

        this.mudaClasseAtivada = this.mudaClasseAtivada.bind(this);

    }

    animacaoLinks(){
        this.navLinks.forEach((link, index) =>{
            link.style.animation ? 
            (link.style.animation = "") :
            (link.style.animation = `animacaoLinks .5s ease forwards ${index / 7 +0.3}s`);
        })
    }

    mudaClasseAtivada(){
        this.navLista.classList.toggle(this.classeAtivada);
        this.celularMenu.classList.toggle(this.classeAtivada);
        this.animacaoLinks();
    }

    adicionaEventoClick(){
        this.celularMenu.addEventListener("click", this.mudaClasseAtivada );
    }

    iniciar(){
        if(this.celularMenu){
            this.adicionaEventoClick();
        }
        return this;
    }
}

const navbarCelular = new NavbarCelular(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

navbarCelular.iniciar();
