function repeat(str, n) {
    let repStr = ""
    for (i = 0; i < n; i++) {
        repStr = repStr + str
    }
    return repStr
}

console.log(repeat('Happy! ', 3))
