/*Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.*/

let convertToRoman = function(num) {
  // Create arrays with default conversion with matching indices. 
let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
let romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X",
  "IX","V","IV","I"];
  // Create an empty string variable for the final roman number
  let romanized = "";
  // Loop through the indices of the decimalValue array.
  for (let index = 0; index < decimalValue.length; index++) {
   // Add the Roman numeral & decrease num by the decimal equivalent.
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

convertToRoman(36);
console.log(convertToRoman(2));
console.log(convertToRoman(891));
console.log(convertToRoman(3999));