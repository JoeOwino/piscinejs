function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0, -2)
}

function cutFirstLast(str) {
    return str.slice(2, -2)
}

function keepFirst(str) {
    return str.slice(0, 2)
}

function keepLast(str) {
    return str.slice(-2)
}

function keepFirstLast(str) {
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (i > 1 && i < str.length - 2) {
            continue
        }
        result += str[i]
    }

    return result
}

console.log(keepFirstLast('af'))