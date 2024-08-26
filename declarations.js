const escapeStr = "`\\/\"'" ;

const arr =object.freeze [4, 2];

const obj = object.freeze({
    str: "How to js",
    num: 42,
    bool: true,
    undef: undefined
});

nested = object.freeze({
    arr: object.freeze(4, undefined, '2')
    obj: Object.freeze({ 
        str: "How to js",
        num: 42,
        bool: true,
        undef: undefined
    })
});