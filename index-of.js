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
    if (typeof(n) === 'string') {
        return 0
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === n) {
            return i
        }
        index++
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

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))
