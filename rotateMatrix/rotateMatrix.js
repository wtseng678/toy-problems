/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix = function(matrix, direction) {
  // Your code here.
  if (matrix.length && matrix[0] !== undefined) {  
    var newMatrix = [];
    if (direction === 1) {
        for (var i = 0; i < matrix[0].length; i++) {
          var row = [];
          for (var j = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[j][i]);
          }
          newMatrix.push(row);
        }
      } else {
        for (var i = matrix[0].length - 1; i >= 0; i--) {
          var row = [];
          for (var j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
          }
          newMatrix.push(row);
        }        
      }
      return newMatrix;
  } else {
    return matrix;
  }
};

// clockwise: need to read from (0, 3) -> (0, 0) then (1, 3) to (1, 0) etc.
// counterclockwise: need to read from (3, 0) -> (3, 3) then (2, 0) -> (2, 3) etc.
// var matrix = [
// [1,2,3,4],
// [5,6,7,8],
// [9,'A','B','C'],
// ['D','E','F','G']
// ];
// console.log(matrix);
// // console.log(matrix[0][0]); // 1
// // console.log(matrix[3][2]); // 'F'

// var rotatedMatrix = rotateMatrix(matrix, 1); // Rotate 90 degrees clockwise
// // rotatedMatrix is:
// console.log(rotatedMatrix);
// console.log(rotatedMatrix[0][0]); // 'D'
// console.log(rotatedMatrix[3][2]); // 8
// var rotatedMatrix2 = rotateMatrix(matrix, -1);
// console.log(rotatedMatrix2);
