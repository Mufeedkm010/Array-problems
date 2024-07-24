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

