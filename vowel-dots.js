function vowelDots(str) {
    let res = ''
    const vowels = /[aeiou]/i
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]
        res += ch
        if (ch.match(vowels)) {
            res += "."
        }
    }

    return res
}

console.log(vowelDots('hello'))
