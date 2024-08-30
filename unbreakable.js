function split(str, sep = ',') {
    if (sep === null) {
        sep = ','
    }

    let result = []
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i])
        }
        return result
    }

    let end = str.indexOf(sep)
    while (end > -1) {
        end = str.indexOf(sep)
        if (end === -1) {
            break
        }
        result.push(str.slice(0, end))
        str = str.slice(end + sep.length)
    }

    return result.push(str)
}

function join(arr, sep) {
    if (sep === null) {
        sep = ','
    }
    var result = arr[0].toString()
    for (var i = 1; i < arr.length; i++) {
        result += sep + arr[i]
    }
    return result
}