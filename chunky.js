function chunk(arr, size) {
    let arrChunk = []
    for (let i = 0; i < arr.length; i += size) {
        arrChunk.push(arr.slice(i, i + size))
    }
    return arrChunk
}