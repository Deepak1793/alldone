/* Write a program to build a `Pyramid of stars` of given height */


	// Write your code here
    


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

const buildPyramid = (rows) => {
  let string ="";
for (let i = 1; i <=rows; i++) {
  let spaces = " ".repeat((rows+1)-i)
  let stars ="* ".repeat(i)// 1 space after star
  string += (spaces + stars + " \n")
}
return string;
};

module.exports = buildPyramid;

