function repeat(str, n) {
    let repStr = ""
    for (let i = 0; i < n; i++) {
        repStr = repStr + str
    }
    return repStr
}

console.log(repeat('Happy! ', 3))
