/*Reuse Patterns Using Capture Groups
Say you want to match a word that occurs multiple times like below.

let repeatStr = "row row row your boat";
You could use /row row row/, but what if you don't know the specific word repeated? 
Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in 
parentheses. In this case, the goal is to capture a word consisting of alphanumeric 
characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which can be 
accessed within the same regex using a backslash and the number of the capture group 
(e.g. \1). Capture groups are automatically numbered by the position of their opening 
parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by spaces:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
Using the .match() method on a string will return an array with the matched substring, 
along with its captured groups.

Use capture groups in reRegex to match a string that consists of only the same number 
repeated exactly three times separated by single spaces.*/
SOLUTION:-
let repeatNum = "42 42 42";
let reRegex =  /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

Hints
Hint 1
Given code below:

let testString = "test test test";
let reRegex = /(test)\s\1/;
let result = reRegex.test(testString);
result will match only test test because \1 in this example stands for the same text as most recently matched by the 1st capturing group (test).

If we were to literally translate the regex, it would look something like this:

let re = /(test)\s\1/;
let literalRe = /test\stest/;
Both re and literalRe would match the same thing.

Hint 2
Given the code below:

let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;
let result = reRegex.test(testString);
result will match whole test test test because:
\1 repeats (test)
\2 repeats (\s)

Hint 3
The code below:

let testString = "test test test test test test";
let reRegex = /(test)(\s)\1\2\1/g;
let result = reRegex.test(testString);
because we used \g, our Regex doesn’t return after first full match (test test test) 
and matched all repetitions. Think about how you can assert the start and end of the 
string.