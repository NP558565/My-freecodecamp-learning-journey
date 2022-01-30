/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    // If code of current character is not equal to first character + no of iterations,
    // hence character has been escaped.
    if (code != str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));
