function indexOf(arr, n, index = 0) {
    let i = index
    for (; i < arr.length; i ++) {
        if (arr[i] === n) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, n, index = arr.length - 1) {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === n) {
            return i
        }
        index++
    }

    return -1
}

function includes(arr, n, index = 0) {
    for (; index < arr.length; index ++) {
        if (arr[index] === n) {
            return true
        }
    }
    return false
}

console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
