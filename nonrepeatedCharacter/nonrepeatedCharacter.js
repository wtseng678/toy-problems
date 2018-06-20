/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var rep = [];
  for (var i = 0; i < string.length; i++) {
  	var repeated = false;
  	for (var j = i + 1; j < string.length; j++) {
  		if (string[i] === string[j]) {
  			repeated = true;
  			rep.push(string[i]);
  		}
  	}
  	if (repeated === false && !rep.includes(string[i])) {
  		return string[i];
  	}
  }
};

//console.log(firstNonRepeatedCharacter('ABA'));
//console.log(firstNonRepeatedCharacter('AACBDB'));