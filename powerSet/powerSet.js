/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
	var result = [""];
	for (var i = 1; i < (1 << str.length); i++) {
		var subset = "";
		for (var j = 0; j < str.length; j++) {
			if (i & (1 << j)) {
				subset += str[j];
			}
		}
		result.push(subset.split("").sort().join(""));
	}
	return result.sort();	
};

console.log(powerSet("abc"));
//console.log(powerSet("abc") == [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]);
console.log(powerSet("jump"));
//.log(powerSet("jump") == ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]);