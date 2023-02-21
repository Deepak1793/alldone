/* Write a Program to convert an array of objects to an object
	based on a given key */


// const convert = () => {
	// Write your code here
// };

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

const convert = (arr, filter) => {
    if (Array.isArray(arr)) {
      let obj = arr.reduce((acc, cur) => {
        return { ...acc, [cur[filter]]: cur };
      }, 0);
      return obj;
    } else {
      return null;
    }
  };
  
module.exports = convert;
