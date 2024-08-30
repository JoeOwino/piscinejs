function reverse(input) {
    let isString = typeof(input) === 'string'
    let revInput = isString ? "" : []

    for (let i = input.length - 1; i >= 0; i--) {
        if (isString) {
            revInput += input[i];
        } else {
            revInput.push(input[i])
        }
    }

    return revInput
}

console.log(reverse("abcdef"))
