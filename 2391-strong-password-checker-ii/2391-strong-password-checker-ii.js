/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  return [hasCorrectLength,hasLowerCase,hasUpperCase,hasDigit,hasSpecialCharacter
  ,hasNotSameCharacterInAdjacentPositions].every(v=> v(password))
};

const hasCorrectLength = (str) =>{
    return str.length >= 8
}

const hasLowerCase = (str) =>{
   return str.toUpperCase() !== str
}

const hasUpperCase = (str) => {
   return str.toLowerCase() !== str
}

const hasDigit = (str) =>{
    return [...str].some(v=> !isNaN(+v));
}

const hasSpecialCharacter = (str) =>{
    return [...str].some(v => "!@#$%^&*()-+".includes(v))
}

const hasNotSameCharacterInAdjacentPositions = (str) => {
  const filtered = [...str].filter((v,i)=>  v !== str[i-1]);
  return filtered.length === str.length
}