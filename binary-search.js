function binarySearch(array, searchTerm) {
	// extra log way to measure efficientc         
	let low = 0
	let high = array.length
	while(high - low >= 1){
		let mid = Math.floor((high + low ) / 2) 
		if(searchTerm == array[mid]){
			return mid
		} else if (array[mid] < searchTerm){
			low = mid
		} else {
			high = mid
		}
	}
}
module.exports = binarySearch;
