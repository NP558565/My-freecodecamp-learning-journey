/*:zap: _Parameters_ are variables that act as placeholders for the values 
that are to be input to a function when it is called. When a function is
 defined, it is typically defined along with one or more parameters. :zap: 
 The actual values that are input (or "passed") into a function when it 
 is called are known as _arguments_.

Here is a function with two parameters, param1 and param2:
```javascript
function testFun(param1, param2) {
  console.log(param1, param2);
}
```
Then we can call testFun:

`testFun("Hello", "World");`

We have passed two arguments, `"Hello"` and `"World"`. Inside the function,
 _param1_ will equal "Hello" and _param2_ will equal "World". Note that you
  could call testFun again with different arguments and the parameters would
   take on the value of the new arguments.

:fire:

Create a function called `functionWithArgs` that accepts two arguments and
 outputs their sum to the dev console.
Call the function with two numbers as arguments.*/


// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(3, 6);
