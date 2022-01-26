/*Just as we can build a string over multiple lines out of string _literals_, we can 
also append variables to a string using the plus equals (`+=`) operator.

Set `someAdjective` and append it to `myStr` using the `+=` operator.*/


// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr);
