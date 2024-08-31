function sameAmount(str, reg1, reg2) {
    reg1 = new RegExp(reg1, "g");
    reg2 = new RegExp(reg2, "g");
    let test1 = str.match(reg1);
    let test2 = str.match(reg2);
    return test1 !== null && test2 !== null && test1.length === test2.length;
}