function every(array, test) {
    for (let val of array) {
        if (!test(val)) return false
    }
    return true
}

function some(array, test) {
    for (let val of array) {
        if (test(val)) return true
    }
    return false
}

function none(array, test) {
    return !some(array, test)
}