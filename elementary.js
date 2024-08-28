function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0
    }
    
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
