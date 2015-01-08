// matrix = [ [1,2,4...], [2,4,6,...], [7,8,9,...] ]
// col = [1, 2, 3]

// COL_TO_CAPTURE = 2


// for row in matrix:
//	col.append(row[COL_TO_CAPTURE])


/** 
* Checks an array to make sure it is unique numbers from 1-9
*    
*/
function checkSeries(sudokuArray) {

	function sortNumber(a,b) {
		return a - b;
	}

	var sortedArray = sudokuArray.sort(sortNumber);

	var num_previous = sortedArray[0];

	if (num_previous !== 1 || sortedArray.length !== 9) {
		console.log("Array is invalid!");
		return false;
	}

	for (var i = 1; i < sortedArray.length - 1; i++) {
		var number = sortedArray[i];
		console.log('testing that ' + number + ' != ' + num_previous);

		if (num_previous === number) {
			console.log('Array is invalid!');
			return false;
		}
		num_previous = number;
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