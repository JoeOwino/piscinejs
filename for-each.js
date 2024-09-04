function forEach(array, action) {
    let i = 0
    for (let x of array) {
        action(x, i, array)
        i++
    }
}