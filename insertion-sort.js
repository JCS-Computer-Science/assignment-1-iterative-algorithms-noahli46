function swap (array, lower){
	let temp = array[lower + 1]
	array[lower + 1 ] = array[lower]
	array[lower] = temp
	// 
	// [5,4] temp = 4
	// [5,5]
	// [4,5]
}

function insertionSort(array) {
	let length = array.length
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	for (let i = 1; i < length; i++) {
		let current = array[i]
		let lower = i-1
		console.log("Array", array, i)
		while(array[lower] > current && lower > -1){
			swap(array,lower)
			lower--
		}
	}
	return array
}

module.exports = insertionSort;
