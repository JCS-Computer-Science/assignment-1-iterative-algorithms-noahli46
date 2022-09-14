function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            let a = i
            let b = i + 1
            if (array[a]> array[b]) {
                let temp = array[b]
                array[b] = array[a]
                array[a] = temp
                swapped = true
            }
        }
    }
	return array;
}

module.exports = bubbleSort;

