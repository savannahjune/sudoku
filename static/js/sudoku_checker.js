// matrix = [ [1,2,4...], [2,4,6,...], [7,8,9,...] ]
// col = [1, 2, 3]

// COL_TO_CAPTURE = 2


// for row in matrix:
//	col.append(row[COL_TO_CAPTURE])

$(document).ready(function () {

	$("#check-submission").click(function(evt) {
		evt.preventDefault();
		console.log( "Pressed the button y'all" );
		// iterate over rows
			// iterate over colors
				// matrix[row][col] = $(' + String(row) + '-' + String(col) + ').val()

		var answerMatrix = [];

		for (var row = 0; row < 9; row++) {
			// executed for each row (9 times)
			var arrayRow = [];
			for (var column = 0; column < 9; column++) {
				// executed 9 times for each row
				idFromForm = "#" + row + "-" + column;
				console.log(typeof idFromForm);
				var number = parseInt($(idFromForm).val(), 10) || 0;
				if (number === 0) {
					console.log("Not solved");
					return;
				}
				arrayRow.push(number);
			}
			// we've completed a row
			answerMatrix.push(arrayRow);
		}
		console.log(answerMatrix);
		// Figure out how to feed every row / col

	});
});

/** 
* Checks an array to make sure it is unique numbers from 1-9
*    
*/
function checkSeries(sudokuArray) {

	function sortNumber(a,b) {
		return a - b;
	}

	var sortedArray = sudokuArray.sort(sortNumber);

	var numPrevious = sortedArray[0];

	if (numPrevious !== 1 || sortedArray.length !== 9) {
		console.log("Array is invalid!");
		return false;
	}

	for (var i = 1; i < sortedArray.length - 1; i++) {
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
var numArray = [3, 2, 7, 5, 8, 9, 4, 8, 7];

checkSeries(numArray);

