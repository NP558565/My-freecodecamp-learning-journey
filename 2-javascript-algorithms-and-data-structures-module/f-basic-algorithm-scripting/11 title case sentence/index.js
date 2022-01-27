/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words 
like the and of.*/

function titleCase(str) {
  let strSplit = str.split(" ");
  console.log(strSplit);
  strSplit = strSplit.map(function(ele) {
    return ele[0].toUpperCase() + ele.substr(1).toLowerCase();
  });
  //   console.log(strSplit.join(" "));

  return strSplit.join(" ");
}

titleCase("I'm a little tea pot");

