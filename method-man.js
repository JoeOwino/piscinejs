function words(str) {
    return str.split(' ')
}

function sentence(arr) {
    return arr.join(' ')
}

function yell(str) {
    return str.toUpperCase()
}

function whisper(str) {
    return str.toLowerCase()
}

function capitalize(str) {
    const startCh = str.charAt(0).toUpperCase()
    const restChrs =str.slice(1).toLowerCase()

    return startCh + restChrs
}
