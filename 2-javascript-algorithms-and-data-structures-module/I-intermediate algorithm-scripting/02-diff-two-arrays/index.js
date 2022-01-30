/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/

function diffArray(arr1, arr2) {
  let newArr = [];
  arr1.map(function(num) {
    if (!arr2.includes(num)) {
      console.log(num);
      newArr.push(num);
    }
  });

  arr2.map(function(num) {
    if (!arr1.includes(num)) {
      console.log(num);
      newArr.push(num);
    }
  });
  console.log(newArr);
  return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
