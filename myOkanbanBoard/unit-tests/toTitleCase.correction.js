/**
 * Retourne une chaîne de caractères dont la première lettre de 
 * chaque mot est en majuscule et les autres lettres en minuscules.
 * Version longue.
 * @param {string} str 
 * @returns string
 */
export function toTitleCaseV1(str) {
  // pas de valeur ou chaîne vide, on retourne une chaîne vide
  if (!str || !str.length) return '';
  
  // passage de la chaîne en minuscules et 
  // on scinde la chaîne dans un tableau par la caractères espace
  // @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split
  const splitStr = str.toLowerCase().split(' ');
  
  // on parcourt chaque morceau de la chaîne
  for (let i = 0; i < splitStr.length; i++) {
    // on remplace le morceau actuel par
    //  - le premier caractère (splitStr[i].charAt(0))
    //    passé en majuscule (toUpperCase())
    //  - auquel on accole le reste de la chaîne (splitStr[i].substring(1))
    // @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    // @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  // on retourne une chaîne fabriquée en joignant les morceaux 
  // de la chaîne contenu dans le tableau
  // @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return splitStr.join(' ');
}

// version courte
export function toTitleCaseV2(str) {
  // le code fait exactement la même chose que sur la version longue !
  return (!str || !str.length) ? '' : str.toLowerCase().split(' ').map((s) => s.length ? s[0].toUpperCase() + s.substring(1) : s).join(' ');
}