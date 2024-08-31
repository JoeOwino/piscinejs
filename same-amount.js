function  sameAmount(str, reg1, reg2) {
    return str.match(reg1).length === str.match(reg2).length 
}