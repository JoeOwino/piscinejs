function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0
    }

    let neg = 1

    if (a < 0) {
        a *= -1
        if (b < 0) {
            b *= -1
        } else {
           neg *= -1 
        }
    }

    if (b < 0) {
        b *= -1
        if (a < 0) {
            a *= -1
        } else {
           neg *= -1 
        }
    }

    let prod = a
    for (let i = 1; i < b; i++) {
        prod += a
    }
    return prod * neg
}

function divide(a, b) {
    if (a === 0) {
        return 0
    }

    if (b === 0) {
        return Infinity
    }


    let neg = 1

    if (a < 0) {
        a *= -1
        if (b < 0) {
            b *= -1
        } else {
           neg *= -1 
        }
    }

    if (b < 0) {
        b *= -1
        if (a < 0) {
            a *= -1
        } else {
           neg *= -1 
        }
    }

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

//console.log(multiply(-34, 78))

console.log(2/0);
