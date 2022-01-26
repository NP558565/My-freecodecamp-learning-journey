/*As seen in the previous challenge, `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.
```javascript
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}
```
In this challenge you are going to use `Object.freeze` to prevent mathematical constants from changing. You need to freeze the `MATH_CONSTANTS` object so that no one is able alter the value of `PI`, add, or delete properties .*/

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/**Exception
 * 
 * TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    at freezeObj (/home/gnasamx/Workspace/FreeCodeCamp/ES6/05 prevent object mutation/index.js:12:23)
    at Object.<anonymous> (/home/gnasamx/Workspace/FreeCodeCamp/ES6/05 prevent object mutation/index.js:18:12)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
 */
