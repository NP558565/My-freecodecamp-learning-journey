/*Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let falsyArr = [0, "", NaN, undefined, false, null];
  return arr.filter(ele => !falsyArr.includes(ele));
}

console.log(bouncer([7, "ate", "", false, 9, 0]));

function bouncer(arr) {
  return arr.filter(Boolean);
}
/*Code Explanation
The Array.prototype.filter method expects a function that returns a Boolean value 
which takes a single argument and returns true for truthy 2.3k value or false for 
falsy 3.2k value. Hence we pass the built-in Boolean function.*/