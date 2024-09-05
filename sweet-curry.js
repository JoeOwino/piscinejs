function mult2(n) {
    return (res) => n * res
}

function add3(n) {
    return function (i) {
        return function (j) {
            return n + i + j
        }
    }
}

function sub4(n) {
    return function (i) {
        return function (j) {
            return function (k) {
                return n - i - j - k
            }
        }
    }
}