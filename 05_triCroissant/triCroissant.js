/* 5/ Écrivez un programme JavaScript pour trier les éléments d'un tableau. 
Exemple de tableau : let arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ] ;
Exemple de sortie : -4,-3,1,2,3,5,6,7,8 */

// Array.prototype.sort() pourrait convenir

function triCroissant(array) {
  // gestion d'undefined
  if (array === undefined) {
    array = [];
  }
  // on doit définir l'algorithme de tri
  // sans quoi les entiers négatifs sont classés alphabétiquement
  return array.sort((a, b) => a - b);
}

// tests

function log(x) {
  console.log(`[${x}] => [${triCroissant(x)}]`);
}

log([3, 8, 7, 6, 5, -4, 3, 2, 1]);
log([]);
log([0]);
log([1, 2, 3, 4, 5]);
log([1, 2, 3, 4, 5].reverse());
log([-1, -2, -3, -4, -5]);
log([-1, -2, -3, -4, -5].reverse());
log([3, 2, 1, -6, 8, 5, -3]);
log([3, 2, 1, -6, 8, 5, -3].reverse());
log();
