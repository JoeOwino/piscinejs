function multiply(a, b) {
    let prod = a
    for (let i = 1; i < b; i++) {
        prod += a
    }
    return prod
}

function divide(a, b) {
    let div = 0
    for (; b <= a; div++) {
        a -= b
    }
    return div
}

function modulo(a, b) {
    for (let div = 0; b <= a; div++) {
        a -= b
    }
    return b - a
}

console.log(multiply(34, 78))
