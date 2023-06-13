const question = console.log("Que voulez-vous faire ?");
const numberSelected = console.log("Théorème de Pythagore (1), Théorème de Thalès (2)");

console.log(question + numberSelected);

if (numberSelected === "1") {
    console.log("Le théorème de Pythagore a été sélectionné.");
} else if (numberSelected === "2") {
    console.log("Le théorème de Thalès a été sélectionné.");
} else {
    console.log("Choix invalide.");
}