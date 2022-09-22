/* 3/ Écrivez une fonction JavaScript pour obtenir le dernier élément d'un
tableau. Passer un paramètre 'n' retournera les 'n' derniers éléments du
tableau */

// utilisons slice !

function nDerniersElements(array, n) {
    // mais retournons un tableau vide si n nous fait sortir de l'array
    if (n <= 0 || n > array.length) {
      return [];
    }
  
    return array.slice(-n);
  }
  
  //tests manuels
  
  function log(array, n) {
    console.log(
      `${n} derniers éléments de [${array}] => [${nDerniersElements(array, n)}]`
    );
  }
  
  log([7, 9, 0, -2], 3);
  log([7, 9, 0, -2], 0);
  log([7, 9, 0, -2], 1);
  log([7, 9, 0, -2], 2);
  log([7, 9, 0, -2], 4);
  log([7, 9, 0, -2], 5);
  log([7, 9, 0, -2], -1);
  