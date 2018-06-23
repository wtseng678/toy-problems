/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

// best time complexity is O(n), worst is O(n^2)
var bubbleSort = function(array) {
  var n = array.length - 1;
  var sorted = function(array) { // checks if function is sorted
	for (var i = 0; i < n; i++) {
		if (array[i] > array[i + 1]) {
			return false;
		}
	}
	return true;
  };
  while (!sorted(array)) { // will not pass through the list if already sorted
    for (var i = 0; i < n; i++) {
  	  if (array[i] > array[i + 1]) {
  	   	var temp = array[i + 1];
  		array[i + 1] = array[i];
  		array[i] = temp;
  	  }
    }
    n--; // iterates on a smaller loop each time to avoid iterating over already sorted elements
  }
  return array;
};

//console.log(bubbleSort([2, 1, 3]));
//console.log(bubbleSort([3, 2, 1]));
//console.log(bubbleSort([5, 4, 3, 2, 1]));
