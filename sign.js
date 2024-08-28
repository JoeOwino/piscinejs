function sign(n) {
    if (n === 0) {
        return 0
    } else if (n < 0) {
        return -1
    } else {
        return 1
    }
}

function sameSign(a, b) {
    if (a === b) {
        return true
    }

    if (a = 0) {
        if (b = 0) {
            return true
        } else {
            return false
        }
    } else {
        if (b < 0) {
            return true
        } else {
            return false
        }
    }
}

console.log(sameSign(-1, 2))
