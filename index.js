// Importation du module readline pour lire les entrées utilisateur
const readline = require('readline');

// Création de l'interface de lecture
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour trouver le théorème de Pythagore
function pythagoreanTheorem() {
  rl.question('Entrez la longueur du premier côté (a) : ', (a) => {
    rl.question('Entrez la longueur du deuxième côté (b) : ', (b) => {
      const c = Math.sqrt(a * a + b * b);
      console.log('Le troisième côté (c) selon le théorème de Pythagore est :', c);
      rl.close();
    });
  });
}

// Fonction pour trouver le théorème de Thalès
function thalesTheorem() {
  rl.question('Entrez la longueur du premier segment (a) : ', (a) => {
    rl.question('Entrez la longueur du deuxième segment (b) : ', (b) => {
      rl.question('Entrez la longueur du troisième segment (c) : ', (c) => {
        const d = (c * b) / a;
        console.log('Le quatrième segment (d) selon le théorème de Thalès est :', d);
        rl.close();
      });
    });
  });
}

// Fonction pour trouver l'aire d'un triangle
function triangleArea() {
  rl.question('Entrez la base du triangle : ', (base) => {
    rl.question('Entrez la hauteur du triangle : ', (height) => {
      const area = (base * height) / 2;
      console.log('L\'aire du triangle est :', area);
      rl.close();
    });
  });
}

// Fonction pour trouver le périmètre d'un triangle
function trianglePerimeter() {
  rl.question('Entrez la longueur du premier côté : ', (sideA) => {
    rl.question('Entrez la longueur du deuxième côté : ', (sideB) => {
      rl.question('Entrez la longueur du troisième côté : ', (sideC) => {
        const perimeter = sideA + sideB + sideC;
        console.log('Le périmètre du triangle est :', perimeter);
        rl.close();
      });
    });
  });
}

// Fonction pour trouver l'aire d'un rectangle
function rectangleArea() {
  rl.question('Entrez la longueur du rectangle : ', (length) => {
    rl.question('Entrez la largeur du rectangle : ', (width) => {
      const area = length * width;
      console.log('L\'aire du rectangle est :', area);
      rl.close();
    });
  });
}

// Fonction pour trouver le périmètre d'un rectangle
function rectanglePerimeter() {
  rl.question('Entrez la longueur du rectangle : ', (length) => {
    rl.question('Entrez la largeur du rectangle : ', (width) => {
      const perimeter = 2 * (length + width);
      console.log('Le périmètre du rectangle est :', perimeter);
      rl.close();
    });
  });
}

// Fonction pour trouver l'aire d'un cercle
function circleArea() {
  rl.question('Entrez le rayon du cercle : ', (radius) => {
    const area = Math.PI * radius * radius;
    console.log('L\'aire du cercle est :', area);
    rl.close();
  });
}

// Fonction pour trouver le périmètre d'un cercle
function circlePerimeter() {
  rl.question('Entrez le rayon du cercle : ', (radius) => {
    const perimeter = 2 * Math.PI * radius;
    console.log('Le périmètre du cercle est :', perimeter);
    rl.close();
  });
}

// Fonction pour effectuer une division euclidienne
function euclideanDivision() {
  rl.question('Entrez le dividende : ', (dividend) => {
    rl.question('Entrez le diviseur : ', (divisor) => {
      const quotient = Math.floor(dividend / divisor);
      const remainder = dividend % divisor;
      console.log('Le quotient de la division euclidienne est :', quotient);
      console.log('Le reste de la division euclidienne est :', remainder);
      rl.close();
    });
  });
}

// Fonction pour effectuer une division normale
function normalDivision() {
  rl.question('Entrez le dividende : ', (dividend) => {
    rl.question('Entrez le diviseur : ', (divisor) => {
      const quotient = dividend / divisor;
      console.log('Le quotient de la division est :', quotient);
      rl.close();
    });
  });
}

// Fonction pour résoudre une équation
function equation() {
    rl.question('Entrez la valeur de a : ', (a) => {
        rl.question('Entrez la valeur de b : ', (b) => {
            rl.question('Entrez la valeur de c : ', (c) => {
                const delta = b * b - 4 * a * c;
                if (delta < 0) {
                    console.log('L\'équation n\'a pas de solution réelle');
                } else if (delta === 0) {
                    const solution = -b / (2 * a);
                    console.log('L\'équation a une solution réelle :', solution);
                } else {
                    const solution1 = (-b - Math.sqrt(delta)) / (2 * a);
                    const solution2 = (-b + Math.sqrt(delta)) / (2 * a);
                    console.log('L\'équation a deux solutions réelles :', solution1, 'et', solution2);
                }
            });
        });
    });
}

// Fonction pour appliquer la double distributivité
function doubleDistributivity() {
    rl.question('Entrez la valeur de a : ', (a) => {
        rl.question('Entrez la valeur de b : ', (b) => {
                const result = (a * a) + (a * b) + (b * a) + (b * b);
                console.log('Le résultat de la double distributivité est :', result);
        });
    });
}




// Fonction pour appliquer l'identité remarquable
function remarkableIdentity() {
    console.log('--- MENU ---');
    console.log('1. IR:1');
    console.log('2. IR:2');
    console.log('3. IR:3');
    console.log('0. Quitter');

    rl.question('Choisissez une option : ', (choice) => {
        switch (choice) {
            case '1':
                ir1();
                break;
            case '2':
                ir2();
                break;
            case '3':
                ir3();
                break;
            case '0':
                displayMenu();
                break;
            default:
                console.log('Option invalide. Veuillez choisir à nouveau.');
                displayMenu();
                break;
        }
    });
}

function ir1() {
    rl.question('Entrez la valeur de a : ', (a) => {
        rl.question('Entrez la valeur de b : ', (b) => {
            const result = (a + b) * (a + b);
            console.log('Le résultat de l\'identité remarquable est :', result);
        });
    });
}

function ir2() {
    rl.question('Entrez la valeur de a : ', (a) => {
        rl.question('Entrez la valeur de b : ', (b) => {
            const result = (a - b) * (a - b);
            console.log('Le résultat de l\'identité remarquable est :', result);
        });
    });
}

function ir3() {
    rl.question('Entrez la valeur de a : ', (a) => {
        rl.question('Entrez la valeur de b : ', (b) => {
            const result = (a + b) * (a - b);
            console.log('Le résultat de l\'identité remarquable est :', result);
        });
    });
}

// Fonction pour appliquer une fonction
function functionMath() {
    console.log('--- MENU ---');
    console.log('1. f(x) = x + 1');
    console.log('2. f(x) = x - 1');
    console.log('3. f(x) = x * 2');
    console.log('4. f(x) = x / 2');

    rl.question('Choisissez une option : ', (choice) => {
        switch (choice) {
            case '1':
                f1();
                break;
            case '2':
                f2();
                break;
            case '3':
                f3();
                break;
            case '4':
                f4();
                break;
            case '0':
                displayMenu();
                break;
            default:
                console.log('Option invalide. Veuillez choisir à nouveau.');
                displayMenu();
                break;
        }
    });
}

// Fonction pour afficher le menu et obtenir le choix de l'utilisateur
function displayMenu() {
  console.log('--- MENU ---');
  console.log('1. Théorème de Pythagore');
  console.log('2. Théorème de Thalès');
  console.log('3. Aire d\'un triangle');
  console.log('4. Périmètre d\'un triangle');
  console.log('5. Aire d\'un rectangle');
  console.log('6. Périmètre d\'un rectangle');
  console.log('7. Aire d\'un cercle');
  console.log('8. Périmètre d\'un cercle');
  console.log('9. Division euclidienne');
  console.log('10. Division normale');
  console.log('11. Equation');
  console.log('12. Double distributivité');
  console.log('13. Identité remarquable');
  console.log('14. Fonction');
  console.log('15. DFP');
  console.log('0. Quitter');

  rl.question('Choisissez une option : ', (choice) => {
    switch (choice) {
      case '1':
        pythagoreanTheorem();
        break;
      case '2':
        thalesTheorem();
        break;
      case '3':
        triangleArea();
        break;
      case '4':
        trianglePerimeter();
        break;
      case '5':
        rectangleArea();
        break;
      case '6':
        rectanglePerimeter();
        break;
      case '7':
        circleArea();
        break;
      case '8':
        circlePerimeter();
        break;
      case '9':
        euclideanDivision();
        break;
      case '10':
        normalDivision();
        break;
      case '11':
        equation();
        break;
      case '12':
        doubleDistributivity();
        break;
      case '13':
        remarkableIdentity();
        break;
      case '14':
        functionMath();
        break;
      case '15':
        Dfp();
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('Option invalide. Veuillez choisir à nouveau.');
        displayMenu();
        break;
    }
  });
}

// Démarrage du programme
displayMenu();
