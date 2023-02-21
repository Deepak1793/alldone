/* Write a Program to Flatten a given n-dimensional array */

// const flatten = () => {
	// Write your code here
// };

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/
const flatten = (arr) => {
    if (Array.isArray(arr)) {
      let n = arr.length;
      let flatarray = arr.flat(n);
      return flatarray;
    } else {
      return null;
    }
    };

module.exports = flatten;
