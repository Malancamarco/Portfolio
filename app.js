// JavaScript per gestire l'apertura e la chiusura del menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuButton.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Chiudere il menu mobile all'avvio della pagina
mobileMenu.classList.add('hidden');
closeIcon.classList.add('hidden');

// Forzare lo scroll all'inizio della pagina all'avvio
window.onload = function () {
    window.scrollTo(0, 0);
};

// Funzione per aprire i link dei progetti in una nuova finestra
function openInNewWindow(url) {
    window.open(url, '_blank');
}

// Event listeners per le immagini dei progetti
document.getElementById('view-app-design').addEventListener('click', function() {
    openInNewWindow('https://www.figma.com/proto/tMlnZEXXnfNYaSKvo0qsRD/Blockbuster?page-id=0%3A1&node-id=1-17&starting-point-node-id=1%3A3&t=jcWjxdHr3EYpJ8Gt-1n');
});

document.getElementById('view-brochure').addEventListener('click', function() {
    openInNewWindow('https://acrobat.adobe.com/id/urn:aaid:sc:EU:ec418e1b-6743-44a1-991c-c53cf7e85de9');
});

document.getElementById('view-book-cover').addEventListener('click', function() {
    openInNewWindow('https://acrobat.adobe.com/id/urn:aaid:sc:EU:c64189f2-62a6-4895-81df-cfd58e81d123');
});


document.getElementById('view-logo-design').addEventListener('click', function() {
    openInNewWindow('https://acrobat.adobe.com/id/urn:aaid:sc:EU:162ef7d7-587f-412b-ba1c-57cde6a716d3');
});
