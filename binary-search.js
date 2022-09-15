function make_aux_array(arr, n)
{
let aux_arr = []
  // For every element in array write
  // elements and their indices in
  // auxiliary array of pairs
  for (let i = 0; i < n; i++) {
    aux_arr.push([arr[i], i]);
  }
  console.table(aux_arr);
  // sort auxiliary array
  aux_arr.sort();
  console.table(aux_arr);

}

function binarySearch(array, searchTerm) {
	make_aux_array(array, array.length)
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	// array.sort((a,b) => { 
	// 	a - b 
	// })
	// return null;
}

module.exports = binarySearch;
