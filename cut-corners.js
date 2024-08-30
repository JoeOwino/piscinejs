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

function round(n) {
    let nDec = modulo(n, 1)
    let nWhole = n - nDec

    let isCeil = nDec > 0.5
    return isCeil ? nWhole + 1 : nWhole
}

function ceil(n) {
    let nDec = modulo(n, 1)
    let nWhole = n - nDec

    let isCeil = nDec > 0
    return isCeil ? nWhole + 1 : nWhole
}

function floor(n) {
    let nDec = modulo(n, 1)
    let nWhole = n - nDec

    return nWhole
}

function trunc(n) {
    let nDec = modulo(n, 1)
    let nWhole = n - nDec

    return nWhole
}

console.log(round(2.04))