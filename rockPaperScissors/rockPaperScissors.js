/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function(n){
  // TODO: your solution here
  var options = ["rock","paper","scissors"];
  var solution = [];
  var temp = [];
  backtrack(n,temp,solution,options);
  return solution;
};

var backtrack = function(n,temp,solution,options){
	if( n === 0) solution.push(temp.slice());
	else{
		for(var i = 0; i<options.length;i++){
			temp.push(options[i]);
			backtrack(n-1,temp,solution,options);
			temp.splice(-1,1);
		}
	}
}
