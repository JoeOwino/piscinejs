function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0
    }

    let isNeg = (a < 0) ^ (b < 0)
    a = Math.abs(a)
    b = Math.abs(b)

    let prod = a
    for (let i = 1; i < b; i++) {
        prod += a
    }

    if (isNeg) {
        return -prod
    }
    return prod 
}

function divide(a, b) {
    if (a === 0) {
        return 0
    }

    if (b === 0) {
        return Infinity
    }

    let isNeg = (a < 0) ^ (b < 0)
    a = Math.abs(a)
    b = Math.abs(b)

    let div = 0
    for (; b <= a; div++) {
        a -= b
    }

    if (isNeg) {
        return -div
    }
    return div
}

function modulo(a, b) {
    let prod = b
    for (;prod <= a; prod += b) {
    }

    return a - (prod - b)
}

console.log((modulo(34, 78)))

