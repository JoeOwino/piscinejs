function  sameAmount(str, reg1, reg2) {
    rexp1 = new RegExp(reg1, "g");
    rexp2 = new RegExp(reg2, "g");
    return str.match(reg1).length === str.match(reg2).length 
}