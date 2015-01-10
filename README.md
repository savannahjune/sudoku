Simply Sudoku by <a href="https://www.linkedin.com/in/savannahhenderson">Savannah Henderson</a>
=========

<strong>Simple web app that allows users to play sudoku, runs test to check their answers, and lets them know if they have won.</strong>

####Table of Contents
- [Stack](#stack)
- [Try it Yourself](#getting-started)
- [Walk Through](#walk-through)
- [Submitting Answers](#submitting-answers)
- [Future Plans](#future-plans)

###### Stack:

*	JavaScript
*	JQuery
*	HTML/CSS
* Sass
* Jade

###### Try it yourself:

1) First, clone this directory to your computer.

<pre><code>$ git clone https://github.com/savannahjune/sudoku.git</code></pre>

2) Drag the main.html file into any browser and begin playing!

3) If you want to continue working on the project, you will need to install Sass and Jade. 

###### Walk Through:

<p>When you first load the page you will see an unfinished Sudoku grid. You can type in your answers or you can use the toggles to choose your number from 1-9.  If you have never played sudoku, or forget how to play, you can read the rules <a href="http://en.wikipedia.org/wiki/Sudoku">here.</a> Fill in your answers and click "Check My Solution" when you are finished.</p>

###### Submitting Answers:

<p>After users submit their answers, the sudoku_checker.js file begins gathering all the answers and assembling them into a two dimensional array. If the array is at all incomplete, then the user is alerted that they have not finished the puzzle. 

<pre><code>
function gatherMatrix() {
	var answerMatrix = [];
	for (var row = 0; row < 9; row++) {
		var arrayRow = [];
		for (var column = 0; column < 9; column++) {
			idFromForm = "#" + row + "-" + column;
			console.log(typeof idFromForm);
			var number = parseInt($(idFromForm).val(), 10) || 0;
			if (number === 0 || number > 9) {
				return;
			}
			arrayRow.push(number);
		}
		answerMatrix.push(arrayRow);
	}
	return answerMatrix;
}
</code></pre>

<p>If complete, this array is used to split up the answers into rows, columns, and squares (collections of nine numbers that are together in a square that must also be 1-9 with no repeats). 

After these rows, columns, and squares are assembled, they are run through a function called testSeries, which tests each one of them.  If one fails, the user is told they have lost. If all pass, they are told that they have won.</p>

<pre><code>
function testSeries(sudokuArray) {
	function sortNumber(a,b) {
		return a - b;
	}
	var sortedArray = sudokuArray.slice(0).sort(sortNumber);
	var numPrevious = sortedArray[0];
	if (numPrevious !== 1 || sortedArray.length !== 9) {
		return false;
	}
	for (var i = 1; i < sortedArray.length; i++) {
		var number = sortedArray[i];
		if (numPrevious === number) {
			return false;
		}
		numPrevious = number;
	}
	return true;
}
</code></pre>


###### Future Plans:
* Modify populatePuzzle function to make random puzzles.
* Add ability to choose skill level: easy, medium, hard and have populatePuzzle modify the amount of answers given to the user at the start of the game.
* Test the game as they type to point out mistakes along the way. Perhaps make this feature optional for users that may not want to be told until the end.
* Add a timer and keep track of best time during each session.
* Add ability to give hints, or fill in more answers if user is stuck.
* Add a "pencil in" option that allows users to put many numbers in one cell to help them narrow down possible answers. 


Thanks!
