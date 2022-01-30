/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.*/
function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    console.log(str.match(regex)[0]);
    let vowelIndex = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
  }
  return pigLatin;
}

function isVowel(l) {
  return l === "a" || l === "e" || l === "i" || l === "o" || l === "u";
}

translatePigLatin("consonant");

/*Code Explanation
Make an empty string to hold your Pig Latin word.
Assign your appropriate regular expression to a variable.
If the first character is a vowel, just add way to end of string and return it.
If the first character is not a vowel:
Find number of consonants before first vowel with help of indexOf(), match() and regex.
Start Pig Latin string with first vowel till the end.
Add letters before first vowel to end of string.
substr() is used for string manipulation here.
Add ay to end of string and return it.
Relevant Links*/
