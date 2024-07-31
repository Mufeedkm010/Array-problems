/* Intersection of two arrays*/


let a=[1,2,3,4,5]
let b=[6,7,8,9,1]
let c=a.filter((x)=>b.includes(x))
console.log(c)

/* difference between two arrays*/

let d=a.filter((x)=>!b.includes(x))
console.log(d)

/* Array diplication*/


function deduplicateArray(arr) {
   return [...new Set(arr)];
 }
let array = [1, 2, 3, 4, 5, 3, 2, 1];
let deduplicatedArray = deduplicateArray(array);
console.log(deduplicatedArray);

 /* Array Map*/

let num=[1,2,3,4,5]
let val=num.map((num)=>num*2)
console.log(val)


/*comparing two array for equility */

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }

  return true;
}
let a1=[1,2]
let b1=[1,2]
console.log(arraysAreEqual(a1,b1))


/*Rotating Array*/

function rotateArray(arr, s) {
  s = s % arr.length;
  return arr.slice(-s).concat(arr.slice(0, -s));
}
let ogArray = [1, 2, 3, 4, 5];
let rtdArray = rotateArray(ogArray, 2);
console.log(rtdArray);

/* checking array elements*/

function checkArrayElements(arr) {
  const all = arr.every(element => typeof element === 'number');

  if (all) {
      console.log("All elements in the array are numbers.");
  } else {
      console.log("Not all elements in the array are numbers.");
  }
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, '2', 3, 4, 5];

checkArrayElements(array1);
checkArrayElements(array2);

/* creating new array with given length*/

function createArrayWithLength(length, value) {
  const newArray = new Array(length).fill(value);
  return newArray;
}
const length = 5;
const value = 1;
const newArray = createArrayWithLength(length, value);

console.log(newArray);

/* Finding index for first occurance */

function findFirstOccurrence(arr, value) {
  const index = arr.indexOf(value);
  return index;
}
const ary = [10, 20, 30, 20, 40, 50];
const valueToFind = 20;

const index = findFirstOccurrence(ary, valueToFind);
console.log("Index of first occurrence of", valueToFind, ":", index);