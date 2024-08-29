function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0
    }

    let isNeg = (a < 0) ^ (b < 0)
    a = Math.abs(a)
    b = Math.abs(b)

    let result = 0
    while (b > 0) {
        if (b & 1) {
            result += a
        }

        a <<= 1 
        b >>= 1
    }

    return isNeg ? -result : result
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

    return isNeg ? -div : div 
}

function modulo(a, b) {
    if (b === 0) {
        return Infinity
    }

    if (a === 0) {
        return 0;
    }

    let isNeg = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);

    let prod = b;
    while (prod <= a) {
        prod += b;
    }

    let result = a - (prod - b);
    return isNeg ? -result : result;
}


console.log(modulo(100, -45))

