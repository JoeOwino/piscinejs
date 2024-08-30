function slice(input, start, end = input.length) {
    const isString = typeof input === 'string';
    let result = isString ? "" : [];
    
    for (let i = start; i < end; i++) {
        if (isString) {
            result += input[i];
        } else {
            result.push(input[i]);
        }
    }

    return result;
}

console.log(slice('abcdef', 2))
