function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end
	
	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	 // search term 5 array[i] = 4
	///
	let low = 0
	let high = array.length
	while (high - low > 1){
		
		let mid = low + (high - low) / 2
		console.log(low, high, high - low > 1, mid, (high - low)/2);

		if (searchTerm == array[mid]){
			return array[mid]
		}
		if (searchTerm > array[mid]) {
			low = mid + 1
		}
		if (searchTerm < array[mid]){
			high = mid - 1
		}
		
	}
	
}

module.exports = binarySearch;
