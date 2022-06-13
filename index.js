//renvoit d'un nombre aléatoire enre 0 (inclus) et 10 (exclus)
const resolution = document.getElementById("resolution");
  
const button = document.getElementById("button");
button.addEventListener('click', function(e) {          // On écoute l'événement click
    resolution.innerText = "10 !"; 
    e.preventDefault();});

    //d'abord, nous générons un aléatoire

const toDevinne = Math.floor(Math.random() * 10 + 1);

let userInput = 0;
let round = 4;
let win = false;

//nous commençons le jeu
do {
	userInput = parseInt(prompt('Entrez un nombre entre 1 et 10'));
	if (isNaN(userInput)) break;
	if (userInput > toDevinne) {
		alert('Votre numéro est trop élévée');
		console.log('Votre numéro est trop élévée');
		round--;
	} else if (userInput < toDevinne) {
		alert('Your number is too small');
		console.log('Your number is too small');
		round--;
	} else {
		win = true;
		break;
	}
} while (round > 0 && win === false);

if (win) {
	alert('Tu as gagné');
} else {
	alert('Tu as perdu');
}