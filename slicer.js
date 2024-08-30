function slice(input, start, end = input.length) {
    const isString = typeof input === 'string';
    let result = isString ? "" : [];

    const length = input.length;
    start = start < 0 ? Math.max(length + start, 0) : start;
    end = end < 0 ? Math.max(length + end, 0) : end;
    
    for (let i = start; i < end; i++) {
        if (isString) {
            result += input[i];
        } else {
            result.push(input[i]);
        }
    }

    return result;
}

console.log(slice('abcdef', -2))
