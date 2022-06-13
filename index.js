//renvoit d'un nombre aléatoire enre 0 (inclus) et 10 (exclus)
const resolution = document.getElementById("resolution");
  
const button = document.getElementsById("button");
button.addEventListener('click', function(e) {          // On écoute l'événement click
    resolution.innerHTML = "C'est cliqué !"; 
    e.preventDefault();            // On change le contenu de notre élément pour afficher "C'est cliqué !"
});