const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
         i++;
        break;
      case '--discard-prev':
        if (arr[i-2] === '--discard-next') {
          break;
        }

        transformedArray.pop();
        break;
      case '--double-next':
        if (i === arr.length - 1) {
          break;
        }

        transformedArray.push(arr[i+1])
        break;
      case '--double-prev':
        if (i === 0 ||  arr[i-2] === '--discard-next') {
          break;
        }

        transformedArray.push(arr[i-1])
        break;
      default :
        transformedArray.push(arr[i])
        break;
    }
  }

  return transformedArray;
}
