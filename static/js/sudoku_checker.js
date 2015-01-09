

$(document).ready(function () {

	// TESTING ONLY
	// populateTestPuzzle();
	// END TESTING ONLY

	// to make beginning puzzle

	populatePuzzle();

	$("#check-submission").click(function(evt) {
		evt.preventDefault();
		console.log( "Pressed the button y'all" );

		var answerMatrix = gatherMatrix();
		// answerMatrix is undefined 
		if (answerMatrix === undefined) {
			alert("You didn't finish your puzzle. Try again!");
		}
		if (checkPuzzle(answerMatrix)) {
			alert("Winning Accomplished!");
		} else {
			alert("You are not winner :/");
		}
	});
});

function checkPuzzle(answerMatrix) {
	return checkRows(answerMatrix) && checkColumns(answerMatrix) && checkSquares(answerMatrix);
}

function checkRows(answerMatrix) {
	for (var row=0; row<9; row++) {
		if (checkSeries(answerMatrix[row]) === false) {
			console.log("Row failed at " + row);
			return false;
		}
	}
	// passed ater all rows were checked
	console.log('All rows are valid');
	return true;
}

function checkColumns(answerMatrix) {
	for (var column = 0; column < 9; column++) {
		var columnArray = [];
		for (var row = 0; row < 9; row++) {
			columnArray.push(answerMatrix[row][column]);
		}
		console.log("Checking column array " + columnArray);
		if (checkSeries(columnArray) === false) {
			console.log("Column failed at " + column);
			return false;
		}
	}
	console.log('All columns are valid');
	return true;
}

function checkSquares(answerMatrix) {
	var col_offset = [0, 3, 6];
	var row_offset = [0, 3, 6];

	for (var square_column_index = 0; square_column_index < 3; square_column_index++) {
		for (var square_row_index = 0; square_row_index < 3; square_row_index++) {
			var squareArray = [];
			for (var column = col_offset[square_column_index]; column < col_offset[square_column_index] + 3; column++) {
				for (var row = row_offset[square_row_index]; row < row_offset[square_row_index] + 3; row++) {
					squareArray.push(answerMatrix[row][column]);
				}
			}
			if (checkSeries(squareArray) === false){
				console.log("Square failed at row " + square_row_index + " column " + square_column_index);
				return false;
			}
		}
	}
	console.log('All squares are valid');
	return true;
}

/** 
* Checks an array to make sure it is unique numbers from 1-9
*    
*/
function checkSeries(sudokuArray) {

	function sortNumber(a,b) {
		return a - b;
	}

	// slice(0) clones the complete array
	var sortedArray = sudokuArray.slice(0).sort(sortNumber);
	var numPrevious = sortedArray[0];

	if (numPrevious !== 1 || sortedArray.length !== 9) {
		console.log("Array is invalid!");
		return false;
	}

	for (var i = 1; i < sortedArray.length; i++) {
		var number = sortedArray[i];
		console.log('testing that ' + number + ' != ' + numPrevious);
		if (numPrevious === number) {
			console.log('Array is invalid!');
			return false;
		}
		numPrevious = number;
	}
	console.log('Array is valid!');
	return true;
}

// perfect array
// var numArray = [6, 4, 2, 3, 9, 7, 1, 8, 5];
// array with duplicates
// var numArray = [3, 2, 7, 1, 5, 8, 8, 9, 4];
// array with not enough answers
// var numArray = [3, 2, 7, 1, 5, 8, 9, 4];
// array with no one as first entry
// var numArray = [3, 2, 7, 5, 8, 9, 4, 8, 7];

// checkSeries(numArray);

function gatherMatrix() {
	var answerMatrix = [];

	for (var row = 0; row < 9; row++) {
		// executed for each row (9 times)
		var arrayRow = [];
		for (var column = 0; column < 9; column++) {
			// executed 9 times for each row
			idFromForm = "#" + row + "-" + column;
			console.log(typeof idFromForm);
			var number = parseInt($(idFromForm).val(), 10) || 0;
			if (number === 0 || number > 9) {
				console.log("Not solved. Empty spot or number greater than nine.");
				return;
			}
			arrayRow.push(number);
		}
		// we've completed a row
		answerMatrix.push(arrayRow);
	}
	console.log(answerMatrix);
	return answerMatrix;
}

function populateTestPuzzle() {
	var testPuzzle = [
		[5,3,4,6,7,8,9,1,2],
		[6,7,2,1,9,5,3,4,8],
		[1,9,8,3,4,2,5,6,7],
		[8,5,9,7,6,1,4,2,3],
		[4,2,6,8,5,3,7,9,1],
		[7,1,3,9,2,4,8,5,6],
		[9,6,1,5,3,7,2,8,4],
		[2,8,7,4,1,9,6,3,5],
		[3,4,5,2,8,6,1,7,9]
	];

	for (var row = 0; row < 9; row++) {
		for (var column = 0; column < 9; column++) {
			$("#" + row + "-" + column).val(testPuzzle[row][column]);
		}
	}
}

function populatePuzzle() {
	var testPuzzle = [
		[5,3,,,7,,,,],
		[6,,,1,9,5,,,],
		[,9,8,,,,,6,],
		[8,,,,6,,,,3],
		[4,,,8,,3,,,1],
		[7,,,,2,,,,6],
		[,6,,,,,2,8,],
		[,,,4,1,9,,,5],
		[,,,,8,,,7,9]
	];

	for (var row = 0; row < 9; row++) {
		for (var column = 0; column < 9; column++) {
			if (testPuzzle[row][column] !== undefined) {
				$("#" + row + "-" + column).val(testPuzzle[row][column]);
				$("#" + row + "-" + column).attr ('readonly', true);
			}
			$("#" + row + "-" + column).val(testPuzzle[row][column]);
		}
	}
}
