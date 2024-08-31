function letterSpaceNumber(str) {
    const arrMtch = str.match(/[a-z] [0-9](?![a-z0-9])/ig)
    return arrMtch === null ? [] : arrMtch
}

console.log(letterSpaceNumber('example 10, example 20'))
