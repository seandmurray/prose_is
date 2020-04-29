/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE

/**
 True if the item passed in is defined.
 False if nothing passed in.
**/
exports.defined = (item) => {
    if (undefined === item) {
        return false;
    }
    return true;
};

/**
 True if the all items passed in are defined.
 False if nothing passed in.
**/
exports.allDefined = (...items) => {
    if (items.length < 1) return false;
    for (const item of items) {
        if (exports.notDefined(item)) return false;
    }
    return true;
}

/**
 True if the any one item passed in is defined.
 False if nothing passed in.
**/
exports.anyDefined = (...items) => {
    if (items.length < 1) return false;
    for (const item of items) {
        if (exports.defined(item)) return true;
    }
    return false;
}

/**
 False if the item passed in is defined.
 True if nothing passed in.
**/
exports.notDefined = (item) => {
    return exports.defined(item) ? false : true;
};

/**
 Nil is Null OR Undefined.
 True if the item passed in is nil.
 Nil is either null or undefined.
 True if nothing passed in.
**/
exports.nil = (item) => {
    if (exports.null(item)) return true;
    if (exports.notDefined(item)) return true;
    return false;
};

/**
 True if all the items passed in are nil.
 Nil is either null or undefined.
 True if nothing passed in.
**/
exports.allNil = (...items) => {
    if (items.length < 1) return true;
    for (const item of items) {
        if (exports.notNil(item)) return false;
    }
    return true;
}

/**
 True if any of the items passed in is nil.
 Nil is either null or undefined.
 True if nothing passed in.
**/
exports.anyNil = (...items) => {
    if (items.length < 1) return true;
    for (const item of items) {
        if (exports.nil(item)) return true;
    }
    return false;
}

/**
 False if the item passed in is not nil.
 Nil is either null or undefined.
 False if nothing passed in.
**/
exports.notNil = (item) => {
    return exports.nil(item) ? false : true;
};

/**
 Returns the logical opposit of the input.
 Returns false for input of true.
 Returns true for input of false.
 Returns true if nothing passed in.
 Returns true if null is passed in.
 Returns true if undefined is passed in.
**/
exports.not = (item) => {
    if (exports.null(item)) return true;
    if (exports.notDefined(item)) return true;
    return item ? false : true;
}

/**
 True if item passed in is null.
 False if item passed in is undefined.
 False if nothing passed in.
**/
exports.null = (item) => {
    if (null === item) {
        return true;
    }
    return false;
};

/**
 True if all of the items passed in are null.
 False if nothing passed in.
**/
exports.allNull = (...items) => {
    if (items.length < 1) return false;
    for (const item of items) {
        if (exports.notNull(item)) return false;
    }
    return true;
}

/**
 True if all any of the items passed in are null.
 False if nothing passed in.
**/
exports.anyNull = (...items) => {
    if (items.length < 1) return false;
    for (const item of items) {
        if (exports.null(item)) return true;
    }
    return false;
}

/**
 True if the item passed in is not null.
 True if nothing passed in.
**/
exports.notNull = (item) => {
    return exports.null(item) ? false : true;
};
