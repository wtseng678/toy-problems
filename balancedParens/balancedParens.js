/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
 var parentheses = [ ['{','}'] , ['[',']'] , ['(',')'] ];
 
var balancedParens = function(input) {
  var exp = input.split('');
  var stack = [];
  for (var i = 0; i < exp.length; i++) {
    if ('{}[]()'.includes(exp[i])) {
      if (open(exp[i])) {
        stack.push(exp[i]);
      } else if (!(stack.length && matches(stack.pop(), exp[i]))) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

var open = function(char) {
  for (var i = 0; i < parentheses.length; i++) {
    if (parentheses[i][0] === char) {
      return true;
    }
  }
  return false;
};

var matches = function(top, closed) {
  for (var i = 0; i < parentheses.length; i++) {
    if (parentheses[i][0] === top && parentheses[i][1] === closed) {
      return true;
    }
  }
  return false;
};

console.log(balancedParens('('));
console.log(balancedParens('()'));
console.log(balancedParens(')('));
console.log(balancedParens('(())'));
console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[(]{)}'));
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));