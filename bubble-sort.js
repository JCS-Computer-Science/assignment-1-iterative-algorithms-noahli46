function bubbleSort(array) {
    for (let step = 0; step < array.length ; step++) {
        let swapped = false
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
        if (swapped == false){
            return array
        }
    }
    return array // should only run in empty arrays as step < array.length would be 0 < 0 which is false and it doesnt run
}
module.exports = bubbleSort;

