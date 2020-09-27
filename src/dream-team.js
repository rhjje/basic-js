const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  if (members === []) {
    return null;
  }

  let arrFormatted = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      arrFormatted.push(members[i].trim());
    }
  }

  let result = [];

  for (let i = 0; i < arrFormatted.length; i++) {
    if (typeof(arrFormatted[i]) === 'string') {
      result.push(arrFormatted[i][0].toUpperCase());
    }
  }

  return result.sort().join('');
};





