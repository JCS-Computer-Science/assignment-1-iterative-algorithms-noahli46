function selectionSort(array) {
	for (let step = 0; step < array.length; step++) {	
		let first = step // the first index after previous sorted steps
		let minIndex = step //initally the minimum is the first slot
		// i is step + 1 because it compares the second index to start instead of 0
		for (let i = step + 1; i < array.length; i++) {
			if (array[i] < array[minIndex]){
				minIndex = i
			}
		}
		let temp = array[first]
		array[first] = array[minIndex]
		array[minIndex] = temp
	}
	return array;
}

module.exports = selectionSort;
