function snakeCase(str) {
  const arr = str.split("");
  let newStr = arr[0].toLowerCase();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      newStr += "_"
    }

    newStr += arr[i].toLowerCase();
  }
  return newStr;
}

exports.snakeCase = snakeCase