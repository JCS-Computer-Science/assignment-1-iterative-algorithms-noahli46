function swap (array, lower){
	let temp = array[lower + 1]
	array[lower + 1 ] = array[lower]
	array[lower] = temp
	// [5,4] temp = 4
	// [5,5]
	// [4,5]
}

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let current = array[i]
		let lower = i-1
		while(array[lower] > current && lower > -1){
			swap(array,lower)
			lower--
		}
	}
	return array
}

module.exports = insertionSort;
