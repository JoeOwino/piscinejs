function groupPrice(str) {
    let prices = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g)
    let arrPrice = []
    if (prices === null) return arrPrice
    prices.forEach((price, i) => {
        arrPrice.push([price]);
        arrPrice[i].push(price.match(/[0-9]+/g)[0])
        arrPrice[i].push(price.match(/[0-9]+/g)[1])
    })
    return arrPrice
}