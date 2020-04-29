# prose_is

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

A logic Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose.

NIL, is NULL or UNDEFINED.

## Usage

```javascript
const is = require('prose_is');

// Nil is Null OR Undefined.
is.nil(obj); //True if obj is Null or Undefined.
is.notNil(obj); //False if obj is Null or Undefined.
is.allNil(obj1, obj2); //True if ALL inputs are Nil.
is.anyNil(obj1, obj2); //True if ANY inputs are Nil.

// Example
const someList = someCallReturningList();
if(is.allNil(...someList)) {
  // Do stuff here
  // as the list is empty or all the values are null or undefined.
}

if(is.anyNil(...someList)) {
  // Do other stuff here
  // as the list is empty or all the values are null or undefined.
}

// Replaces the easily misread ! operator.
is.not(true); // False
is.not(false); // True

is.Defined(obj); //True if defined, including if value is null.
is.notDefined(obj); //False if defined, including if value is null.
is.allDefined(obj1, obj2); //True if ALL inputs are Defined.
is.anyDefined(obj1, obj2); //True if ANY inputs are Defined.

is.null(obj); //True if Null, false if Undefined.
is.notNull(obj); //True if Undefined or NOT null.
is.allNul(obj1, obj2); //True if ALL inputs are Null.
is.anyNull(obj1, obj2); //True if ANY inputs are Null.
