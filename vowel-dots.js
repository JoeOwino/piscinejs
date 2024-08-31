const vowels = /[aeiou]/gi
function vowelDots(str) {
    return str.replace(vowels, function (s) {
        return s + "."
    })
}

console.log(vowelDots('hello'))
