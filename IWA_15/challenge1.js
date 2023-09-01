const data = { //avaScript object called data with a single property lists
	lists: [//lists is an array of arrays
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

//This line extracts the second element (index 1) from each inner array within the data.lists array.
//It uses the map function to create a new array called lists,
//which contains only the arrays of numbers from the original data structure.
const lists = data.lists.map(item => item[1]);

const result = [];// initializes an empty array to store the extracted values later in the code.

const extractBiggest = () => {
    //For each list, biggestValues checks if the list has elements (length greater than 0), and if so, it extracts the last element using list[list.length - 1].
	const biggestValues = lists.map(list => list.length > 0 ? list[list.length - 1] : -Infinity);//If the list is empty, it assigns -Infinity. So, biggestValues is an array of the last elements of each list or -Infinity if the list is empty.
	//finds index of maximum value in biggestValues using Math.max(...biggestValues) and indexOf. This index corresponds to the list with the biggest last element.
    const biggestIndex = biggestValues.indexOf(Math.max(...biggestValues));

	if (lists[biggestIndex].length > 0) {//If the identified list (at lists[biggestIndex]) is not empty, it removes and pushes the last element of that list into the result array.
		result.push(lists[biggestIndex].pop());
	}
}

for (let i = 0; i < 15; i++) { //If the identified list (at lists[biggestIndex]) is not empty, it removes and pushes the last element of that list into the result array.
  extractBiggest();
}
// Only edit above but I failed

console.log(result);
