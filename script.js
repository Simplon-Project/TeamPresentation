// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Simuler un chargement de contenu (vous pouvez remplacer setTimeout par un événement de chargement réel)
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 2500); // Modifier la durée du chargement simulé en millisecondes
})

document.addEventListener("DOMContentLoaded", function() {
    const parallaxBanner = document.getElementById('parallaxBanner');
    const speed = 0.3; // Vitesse du parallaxe, ajustez selon vos préférences

    window.addEventListener('scroll', function() {
        const yPos = -window.scrollY * speed;
        parallaxBanner.style.backgroundPositionY = `${yPos}px`;
    });
});


const text = "Présentation de votre équipe !"; // Votre texte à afficher
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById('text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Vitesse de saisie (en millisecondes)
    }
}

setTimeout(typeWriter,4000);

