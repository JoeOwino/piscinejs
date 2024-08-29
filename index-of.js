function indexOf(arr, n, index = 0) {
    let i = index
    for (; i < arr.length; i ++) {
        if (arr[i] === n) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, n, index = 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === n) {
            return i
        }
    }

    return -1
}

function includes(arr, n, index) {
    let i = index
    for (; i < arr.length; i ++) {
        if (arr[i] === n) {
            return true
        }
    }
    return false
}

console.log(lastIndexOf([4,2,3,4,5], 4))