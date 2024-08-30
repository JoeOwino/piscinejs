function round(n) {
    let isCeil = n - parseInt(n) > 0.5
    return isCeil ? parseInt(n) + 1 : parseInt(n)
}

function ceil(n) {
    let isCeil = n - parseInt(n) > 0
    return isCeil ? parseInt(n) + 1 : parseInt(n)
}

function floor(n) {
    return parseInt(n)
}

function trunc(n) {
    return parseInt(n)
}

console.log(floor(2.99))