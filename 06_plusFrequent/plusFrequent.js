/* 6/ Écrivez un programme JavaScript pour trouver l'élément le plus fréquent
d'un tableau. Exemple de tableau :
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] ;
Exemple de sortie : a (5 fois) */

// tentons de nous mâcher le travail à l'aide d'un tri alphabétique

function plusFrequent(array) {
  // tri

  array.sort();

  // variables utilitaires

  const vus = [];
  let max = [0, ""] // on n'a pas encore les objets, faute de grives...
  // max[0] <= nb max d'occurrences
  // max[1] <= élément le plus fréquent

  // pour chaque élément nouveau rencontré en parcourant le tableau
  // on calcule le nombre d'occurrences à l'aide des index de la
  // première et de la dernière occurrence

  for (const elt of array) {
    if (!vus.includes(elt)) {
      vus.push(elt); // on marque l'élément comme vu

      let compte = array.lastIndexOf(elt) - array.indexOf(elt) + 1;

      // on met à jour max si nécessaire
      if (compte > max[0]) {
        max = [compte, elt];
      }
    }
  }

  return `${max[1]} (${max[0]} fois)`;
}

// tests

function log(x) {
  console.log(`${x} => ${x.sort()} => ${plusFrequent(x)}`);
}

log([])
log(["toto", 1, "toto"]);
log("Karine alla en Irak".toLowerCase().split(''));
log(["bouh!"]);
log([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);