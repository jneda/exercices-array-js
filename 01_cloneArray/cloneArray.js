/* 1/ Écrivez une fonction JavaScript pour cloner un tableau.
Ex : array_clone([1,2,3,4])
Sortie prévue : [1,2,3,4] */

// essayons avec slice

function cloneArray(tableau) {
  return tableau.slice();
}

// tests en dur

// utilitaires

function compareValeursArray(array1, array2) {
  /* on est obligé de comparer les valeurs une à une
  pour s'assurer que le second Array est une copie
  fidèle du premier */
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }

  return true;
}

function log (a) {
  const b = cloneArray(a);
  console.log(
    `référence de [${a}] != référence de [${b}] ? ${a !== b}\n` +
    `valeurs de [${a}] = valeurs de [${b}] ? ${compareValeursArray(a, b)}`
  );
}

// tests

log([1, 2, 3, 4]);
log([]);
log(["youpi", "banane", "slip", "man"]);