/* 2/ Écrivez une fonction JavaScript pour obtenir le premier élément d'un
tableau. Passer un paramètre 'n', retournera les 'n' premiers éléments du
tableau
Ex : first([7, 9, 0, -2],3)
Sortie prévue : 7,9,0 */

// utilisons slice !

function nPremiersElements(array, n) {
  // mais retournons un tableau vide si n nous fait sortir de l'array
  if (n < 0 || n > array.length) {
    return [];
  }

  return array.slice(0, n);
}

//tests manuels

function log(array, n) {
  console.log(
    `${n} premiers éléments de [${array}] => [${nPremiersElements(array, n)}]`
  );
}

log([7, 9, 0, -2], 3);
log([7, 9, 0, -2], 0);
log([7, 9, 0, -2], 1);
log([7, 9, 0, -2], 2);
log([7, 9, 0, -2], 4);
log([7, 9, 0, -2], 5);
log([7, 9, 0, -2], -1);
