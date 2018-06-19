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

// Hey min, we're going to implement a toy problem, wanna join us?
// I'm a big pile of rocks, so there's nothing to be afraid of, unless you're made of scissors, just a little rock paper scissors joke for you
// It's a recursive circle, but not like a circle, but a freaky circle

var rockPaperScissors = function(rounds) {
	var sequences = [];
	var game = ["rock", "paper", "scissors"];
	var recurse = function(numRounds, throws){
	  if (numRounds === 0) {
	    sequences.push(throws);
	  } else {
		game.forEach(function(play){
		  recurse(numRounds - 1, throws.concat(play))
		});
	  }
	};

	recurse(rounds, []);
	return sequences;
}

console.log(rockPaperScissors(5));

// array1.concat(array2);


/*

function(3)


set first to R, P, or S (depending on what hasn't been set already)
	now set second to R, P, or S (depending on what hasn't been set already)
		now set third to R, P, or S (depending on what hasn't been set already)
			and so on for next rounds

*/