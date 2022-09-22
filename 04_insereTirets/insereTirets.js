/* 4/ Écrivez un programme JavaScript qui accepte un nombre en entrée et insère
des tirets (-) entre chacun des deux nombres pairs. Par exemple, si vous
acceptez 025468, la sortie doit être 0-254-6-8. */

// fonction utilitaire

function estPair(n) {
  // on va traiter des caractères
  // histoire que Sami soit content, on fait la conversion vers un entier
  return parseInt(n) % 2 === 0;
}

// fonction principale

function insereTirets(entier) {
  // gestion de undefined

  if (entier === undefined) {
    entier = "";
  }

  // on convertit entier en tableau de caractères

  const chiffres = entier.toString().split("");

  // initialisation des variables de travail

  const resultat = [chiffres[0]];
  let precedentEstPair = estPair(chiffres[0]);

  // pour chaque chiffre du second au dernier
  // on vérifie la condition et on traite selon le cas

  for (let i = 1; i < chiffres.length; i++) {
    const actuel = chiffres[i];
    const actuelEstPair = estPair(actuel);

    if (precedentEstPair && actuelEstPair) {
      resultat.push("-");
    }

    resultat.push(actuel);
    precedentEstPair = actuelEstPair; // MAJ avant de refaire un tour
  }

  // on convertit en chaîne à la volée
  return resultat.join("");
}

// tests

function log(x) {
  console.log(`${x} => ${insereTirets(x)}`);
}

log("025468");
log(13579);
log("13579");
log(123456789);
log("123456789");
log(24682468);
log("24682468");
log(0);
log("");
log();
