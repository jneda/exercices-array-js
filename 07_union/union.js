/* 7/ Écrivez une fonction JavaScript pour fusionner deux tableaux et supprimer
tous les éléments en double. 
Données de test :
var tableau1 = [1, 2, 3] ;
var tableau2 = [2, 30, 1] ;
console.log(merge_array(array1, array2));
Exemple de sortie : [3, 2, 30, 1] */

// on peut utiliser Array.protoype.filter() par ex.
// pour filtrer les éléments déjà présents dans tab1

function union(arr1, arr2) {
  const resultat = arr1.slice();

  return resultat.concat(
    arr2.filter(function (elt) {
      return !arr1.includes(elt);
    })
  );
}

// tests

function log(a, b) {
  console.log(`[${a}] union [${b}] => [${union(a, b)}]`);
}

log([], []);
log(["toto"], []);
log([], ["tata"]);
log(["riri", "fifi"], ["fifi", "loulou"]);
log([1, 2, 3], [2, 30, 1]);
log(
  ["youpi", "banane"],
  [
    function () {
      console.log("Coucou !");
    }
  ]
);
