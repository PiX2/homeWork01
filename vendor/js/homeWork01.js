/*
 * Home Work 0.1
 * Polleunus Philippe
 * CEPEGRA
 * Released on: Mai 23, 2017
 */

/* ==========================
  Javacript 
========================== */

// Exercices 1 - Générateur d'insultes
var firstList = ["Vielle", "moche", "ridée"];
var secondList =["chausette", "banane", "cruche"];
var turtList = ["molle", "pourri", "crever"];
var ramdomFunct = getRandomNumber(3);
console.log("Espece de " + firstList[ramdomFunct] + " " + secondList[ramdomFunct] + " " + turtList[ramdomFunct]);


// Exercices 2 - Magic 8 Ball
var reponses = ["Essaye plus tard", "Essaye encore", "Pas d'avis", "C'est ton destin", "Le sort en est jeté", "Une chance sur deux", "Repose ta question", "D'après moi oui", "Cest certain", "Oui absolument", "Tu peux compter dessus", "Sans aucun doute", "Très probable", "Oui", "C'est bien parti", "C'est bien parti", "C'est non", "Peu probable", "Faut pas rêver", "N'y compte pas", "Impossible"];

for(i = 0; i <=2; i++){
	var reponse = prompt ("Que voulez-vous savoir ?");
	if(reponse[reponse.length-1] === "?") {
		console.log(reponses[getRandomNumber(20)]);
	}
	else {
		console.log("Ce n'est pas une question !");
	}
}
console.log("C'est fini pour aujourd'hui !");


// Exercices 3 - Parcours de la liste des plats de la semaine
var plats = ["Cannellonis farcis épinards ricotta", "Burger végétarien, pommes de terre et salade", "Chili sin carne", "Carpaccio de légumes et purée de lentilles", "Taboulé libanais et falafels"];

console.log("Cette semaine on va manger...");
for(i = 0; i <=4; i++){
var jourPlat = plats[i];
    console.log(jourPlat);
}
console.log("On va se régaler !");


// --- !!! END SCRIPT !!! ---