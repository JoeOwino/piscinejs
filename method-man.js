function words(str) {
    return str.split(' ')
}

function sentence(arr) {
    return arr.join(' ')
}

function yell(str) {
    return str.toLocaleUpperCase()
}

function whisper(str) {
    return str.toLocaleLowerCase()
}

function capitalize(str) {
    const startCh = str.charAt(0).toLocaleUpperCase()
    const restChrs =str.slice(1).toLocaleLowerCase()

    return startCh + restChrs
}

console.log(capitalize('*hELLO'))