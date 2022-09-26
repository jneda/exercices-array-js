/* 9/ Écrivez une fonction JavaScript pour obtenir le nième plus grand élément
d'un tableau non trié. 

Données de test :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 3));
Exemple de sortie : 90 */

// je ne vois pas que la consigne m'interdise de trier le tableau
// non trié !
// histoire de pas toucher l'original je trie une copie du tableau

function numSort(array) {
  return array.slice().sort((a, b) => a - b);
}

function niemePlusGrand(array, n) {
  // gestion du dépassement de tableau
  if (n > array.length) {
    return null;
  }

  return numSort(array)[array.length - n];
}

// tests

function log(array, n) {
  console.log(
    `${n}ieme plus grand de [${array}] => [${numSort(array)}] ` +
    `=> ${niemePlusGrand(array, n)}`
  );
}

log([], 10);
log([3, 2, 1], 1);
log([3, 2, 1], 2);
log([3, 2, 1], 3);
log([3, 2, 1], 4);
log([-3, -1, 0, -2, 1], 1);
log([-3, -1, 0, -2, 1], 2);
log([-3, -1, 0, -2, 1], 3);
log([-3, -1, 0, -2, 1], 4);
log([43, 56, 23, 89, 88, 90, 99, 652], 3);
