/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  if (!string.length) {
    return null;
  }
  var max = [0, 0];
  var cur = [0, 0];
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      cur[1] = i;
      if(cur[1] - cur[0] > max[1] - max[0]) {
        max = cur;
      }      
    } else {
      cur = [i, i];
    } 
  }
  return max;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

console.log(longestRun("abbbcc"));
console.log(longestRun("aabbc"));
console.log(longestRun("abcd"));
console.log(longestRun(""));
var random = randomString(1);
console.log(random + " " + longestRun(random));
random = randomString(2);
console.log(random + " " + longestRun(random));
random = randomString(3);
console.log(random + " " + longestRun(random));
random = randomString(4);
console.log(random + " " + longestRun(random));
random = randomString(5);
console.log(random + " " + longestRun(random));
random = randomString(6);
console.log(random + " " + longestRun(random));
random = randomString(7);
console.log(random + " " + longestRun(random));
random = randomString(8);
console.log(random + " " + longestRun(random));
random = randomString(9);
console.log(random + " " + longestRun(random));
random = randomString(10);
console.log(random + " " + longestRun(random));