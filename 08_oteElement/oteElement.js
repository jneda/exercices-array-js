/* 8/ Écrivez une fonction JavaScript pour supprimer un élément spécifique
d'un tableau. 
Données de test :
console.log(remove_array_element([2, 5, 9, 6], 5));
Exemple de sortie : [2, 9, 6] */

// Array.prototype.filter() convient bien ici

function oteElement(array, val) {
  return array.filter(function (elt) {
    return elt !== val;
  });
}

// tests

function log (arr, v) {
  console.log(`[${arr}] - \`${v}\` => [${oteElement(arr, v)}]`);
}

log(["riri", "fifi", "loulou"], "donald");
log(["riri", "fifi", "loulou"], "fifi");
log([], "ptdmdlol");
log(["ptdmdlol"], "");
log([2, 5, 9, 6], 5);
log("Karine alla en Irak".toLowerCase().split(""), " ");
