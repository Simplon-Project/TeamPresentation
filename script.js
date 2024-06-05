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


const text = "une team de ouf pour des ouf de dev !"; // Votre texte à afficher
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById('text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Vitesse de saisie (en millisecondes)
    }
}

setTimeout(typeWriter,4000);

function displayCard(card) {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block'; // Afficher l'arrière-plan flouté ou assombri

    var clonedCard = card.cloneNode(true); // Cloner la carte sélectionnée
    clonedCard.style.position = 'fixed';
    clonedCard.style.top = '50%';
    clonedCard.style.left = '50%';
    clonedCard.style.transform = 'translate(-50%, -50%)';
    clonedCard.style.zIndex = '1000';
    clonedCard.onclick = function() {
        overlay.style.display = 'none'; // Masquer l'arrière-plan flouté ou assombri lorsque la carte est cliquée
        document.body.removeChild(clonedCard); // Supprimer la carte clonée
    };

    overlay.onclick = function() {
        overlay.style.display = 'none'; // Masquer l'arrière-plan flouté ou assombri
        document.body.removeChild(clonedCard); // Supprimer la carte clonée
        overlay.onclick = null; // Réinitialiser le gestionnaire d'événements pour éviter les fuites de mémoire
    };

    var otherCards = document.querySelectorAll('.card');
    otherCards.forEach(function(otherCard) {
        if (otherCard !== card) {
            otherCard.style.filter = 'brightness(50%)'; // Assombrir la carte
        }
        else{
            otherCard.style.filter ='brightness(100%)'
        }
    });

}
