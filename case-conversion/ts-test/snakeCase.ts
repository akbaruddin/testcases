function snakeCase(str: string): string {
  const arr: Array<String> = str.split("");
  let newStr: string = arr[0].toLowerCase();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      newStr += "_"
    }

    newStr += arr[i].toLowerCase();
  }
  return newStr;
}

export default snakeCase;