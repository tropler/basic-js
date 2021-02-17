const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let firstNamesLetters = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    }

    firstNamesLetters.push(members[i].trim().toUpperCase().charAt(0));
  }

  return firstNamesLetters.sort().join("");
}
