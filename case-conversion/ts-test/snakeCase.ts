function snakeCase(str: String): String {
  const arr: Array<String> = str.split("");
  let newStr: String = arr[0].toLowerCase();
  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      newStr += "_"
    }

    newStr += arr[i].toLowerCase();
  }
  return newStr;
}

export default snakeCase;