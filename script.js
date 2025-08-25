const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const menuOverlay = document.getElementById("menu-overlay");
emailjs.init("SUA_PUBLIC_KEY");

document.getElementById("contato").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this)
    .then(() => {
        const card = document.getElementById("success-card");
        card.classList.remove("hidden");

        setTimeout(() => {
            card.classList.add("hidden");
        }, 4000);

        this.reset();
    })

    .catch(() => {
        const danger_card = document.getElementById("danger-card");
        danger_card.classList.remove("hidden");

        setTimeout(() => {
            danger_card.classList.add("hidden");
        }, 4000);

        this.reset();
    });

});

function toggleMenu() {
    // Alterna a posição do menu (dentro/fora da tela)
    mobileMenu.classList.toggle("translate-x-full");
    
    // Mostra/Esconde o overlay
    menuOverlay.classList.toggle("hidden");

    // Alterna o ícone entre 'bars' (hambúrguer) e 'xmark' (X)
    if (mobileMenu.classList.contains("translate-x-full")) {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuButton.setAttribute("aria-expanded", "true");
    }
}

// Event listener para o botão
menuButton.addEventListener("click", toggleMenu);

// Event listener para o overlay (fechar ao clicar fora)
menuOverlay.addEventListener("click", toggleMenu);

const linksMenu = mobileMenu.querySelectorAll('a');
linksMenu.forEach(linksMenu => {
    linksMenu.addEventListener('click', () => {
        toggleMenu();
    });
});