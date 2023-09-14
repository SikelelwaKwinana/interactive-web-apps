const data = {
  //avaScript object called data with a single property lists
  lists: [
    //lists is an array of arrays
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

const result = [];

/*use map function to find and extract the biggest element among three lists.
 *arr an object for sublist creat
 *value=last element of sublist or -Infinity if empty
 *use the reduce function to find list that has the biggest value an sassign to variable biggest
 */

const extractBiggest = () => {
  const [first, second, third] = data.lists.map(([_, arr]) => ({
    arr,
    value: arr.length > 0 ? arr[arr.length - 1] : -Infinity,
  }));

  const biggest = [first, second, third].reduce((a, b) =>
    a.value > b.value ? a : b
  );

  /**check if biggest value is not -Infinity,
   * meaning there are elements left in the identified list (at biggest.arr).
   * If so, it removes the last element from that list using pop()
   *  and returns the biggest.value, which is the largest element.
   **/

  if (biggest.value !== -Infinity) {
    biggest.arr.pop();
    return biggest.value;
  }
};

for (let i = 0; i <= 15; i++) {
  //If the identified list (at lists[biggestIndex]) is not empty, it removes and pushes the last element of that list into the result array.
  result.push();
}
// Only edit below

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);

/** FIRST TRY
 
//This line extracts the second element (index 1) from each inner array within the data.lists array.
//It uses the map function to create a new array called lists,
//which contains only the arrays of numbers from the original data structure.

const lists = data.lists.map(item => item[1]);

const result = [];// initializes an empty array to store the extracted values later in the code.

	// For each list, biggestValues checks if the list has elements (length greater than 0), 
	// and if so, it extracts the last element using list[list.length - 1].
  	// If the list is empty, it assigns -Infinity. So, biggestValues is an array of the last elements of each list 
	// or -Infinity if the list is empty.
  	// Finds index of maximum value in biggestValues using Math.max(...biggestValues) and indexOf. 
	// This index corresponds to the list with the biggest last element.
	// If the identified list (at lists[biggestIndex]) is not empty,
	// it removes and pushes the last element of that list into the result array.

const extractBiggest = () => {
	const biggestValues = lists.map(list => list.length > 0 ? list[list.length - 1] : -Infinity);
    const biggestIndex = biggestValues.indexOf(Math.max(...biggestValues));

	if (lists[biggestIndex].length > 0) {
		result.push(lists[biggestIndex].pop());
	}
}

for (let i = 0; i < 15; i++) { 
  extractBiggest();
}
// Only edit above but I failed

console.log(result); */
