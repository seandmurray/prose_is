# prose_is

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

A logic Utility. Nil is: null or undefined. Make writing node easier, prettier and less error prone. Writes and reads more like prose.

## Notes

A new concept of *Nil* has been added. Nil is anything that is either undefined or null.

## Usage

```javascript
const is = require('prose_is');

/**
 True if the item passed in is nil.
 Nil is either null or undefined.
 True if nothing passed in.
**/
is.nil(obj);

/**
 False if the item passed in is not nil.
 Nil is either null or undefined.
 False if nothing passed in.
**/
is.notNil(obj);

/**
 True if all the items passed in are nil.
 Nil is either null or undefined.
 True if nothing passed in.
**/
is.allNil(obj1, obj2);

/**
 True if any of the items passed in is nil.
 Nil is either null or undefined.
 True if nothing passed in.
**/
is.anyNil(obj1, obj2);

// Example
const someList = someCallReturningList();
// use the ... operator to decompose the list into arguments.
if(is.allNil(...someList)) {
  // Do stuff here
  // as the list is empty or all the values are null or undefined.
}

// use the ... operator to decompose the list into arguments.
if(is.anyNil(...someList)) {
  // Do other stuff here
  // as the list is empty or all the values are null or undefined.
}

/**
 Returns the logical opposit of the input.
 Returns false for input of true.
 Returns true for input of false.
 Returns true if nothing passed in.
 Returns true if null is passed in.
 Returns true if undefined is passed in.
 You never have to use the ! operator again!
**/
is.not(true); // False
is.not(false); // True

/**
 True if the item passed in is defined.
 False if nothing passed in.
**/
is.defined(obj);

/**
 False if the item passed in is defined.
 True if nothing passed in.
**/
is.notDefined(obj);

/**
 True if the all items passed in are defined.
 False if nothing passed in.
**/
is.allDefined(obj1, obj2);

/**
 True if the any one item passed in is defined.
 False if nothing passed in.
**/
is.anyDefined(obj1, obj2);

/**
 True if item passed in is null.
 False if item passed in is undefined.
 False if nothing passed in.
**/
is.null(obj);

/**
 True if the item passed in is not null.
 True if nothing passed in.
**/
is.notNull(obj);

/**
 True if all of the items passed in are null.
 False if nothing passed in.
**/
is.allNul(obj1, obj2);

/**
 True if all any of the items passed in are null.
 False if nothing passed in.
**/
is.anyNull(obj1, obj2);
```
