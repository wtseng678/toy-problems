/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function() {
  // TODO: Your code here!
  var str = "";
  var arg = [].slice.call(arguments);
  for (var i = 0; i < arg[0].length; i++) {
  	var one = true;
  	for (var j = 1; j < arg.length; j++) {
  		if (!arg[j].includes(arg[0][i]) || str.includes(arg[0][i])) {
  			one = false;
  		}
  	}
  	if (one) {
  		str += arg[0][i];
  	}
  }
  return str;
};