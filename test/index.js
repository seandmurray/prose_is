const assert = require('assert');
const os = require('os');
const path = require('path');

const is = require('../index');

const booleanObjFalse = new Boolean(false);
const booleanObjTrue = new Boolean(true);
const testArray = [1, 2, 3, 4];
const testArrayEmpty = [];
const testFileExists = path.join(os.tmpdir(), 'is_test_file_exists.tmp');
const testFileNotExists = path.join(os.tmpdir(), 'is_test_file_not_exists.tmp');
const testFunction = () => {};
const testNum = 123;
const testObj = { "a": "b" };
const testObjEmpty = {};
const testString = 'avalue';
const testStringEmpty = '';


// Defined
assert.equal(is.defined(), false, 'Undefined is not defined');
assert.equal(is.defined(null), true, 'Null is not defined');
assert.equal(is.defined(undefined), false, 'Undefined is not defined');
assert.equal(is.defined(booleanObjFalse), true, 'Boolean object is not defined');
assert.equal(is.defined(booleanObjTrue), true, 'Boolean object is not defined');
assert.equal(is.defined(testArrayEmpty), true, 'Empty array is not defined');
assert.equal(is.defined(testArray), true, 'Array is not defined');
assert.equal(is.defined(testFunction), true, 'Function is not defined');
assert.equal(is.defined(testNum), true, 'Number is not defined');
assert.equal(is.defined(testObj), true, 'Object is not defined');
assert.equal(is.defined(testString), true, 'String is not defined');
assert.equal(is.defined(false), true, 'Boolean is not defined');
assert.equal(is.defined(true), true, 'Boolean is not defined');
console.log('Defined testing success');

// allDefined
assert.equal(is.allDefined(), false, 'Nothing passed in, nothing defined');
assert.equal(is.allDefined(null), true, 'Null is defined');
assert.equal(is.allDefined(undefined), false, 'undefined');
assert.equal(is.allDefined(null, undefined), false, 'one undefined');
assert.equal(is.allDefined('one', 'two'), true, 'List passed in, all defined');
assert.equal(is.allDefined('one', 'two', null), true, 'List passed in, some null but not undefined');
assert.equal(is.allDefined('one', 'two', null, undefined), false, 'List passed in, at least one undefined');
console.log('allDefined testing success');

// anyDefined
assert.equal(is.anyDefined(), false, 'Nothing passed in, nothing defined');
assert.equal(is.anyDefined(null), true, 'Null is defined');
assert.equal(is.anyDefined(undefined), false, 'undefined');
assert.equal(is.anyDefined(null, undefined), true, 'null is defined');
assert.equal(is.anyDefined('one', 'two'), true, 'List passed in, all defined');
assert.equal(is.anyDefined('one', 'two', null), true, 'List passed in, some null but not undefined');
assert.equal(is.anyDefined('one', 'two', null, undefined), true, 'List passed in, at least one undefined');
console.log('anyDefined testing success');

// notDefined
assert.equal(is.notDefined(), true, 'Undefined is defined');
assert.equal(is.notDefined(null), false, 'Null is not defined');
assert.equal(is.notDefined(undefined), true, 'Undefined is defined');
assert.equal(is.notDefined(booleanObjFalse), false, 'Boolean object is not defined');
assert.equal(is.notDefined(booleanObjTrue), false, 'Boolean object is not defined');
assert.equal(is.notDefined(testArrayEmpty), false, 'Empty array is not defined');
assert.equal(is.notDefined(testArray), false, 'Array is not defined');
assert.equal(is.notDefined(testFunction), false, 'Function is not defined');
assert.equal(is.notDefined(testNum), false, 'Number is not defined');
assert.equal(is.notDefined(testObj), false, 'Object is not defined');
assert.equal(is.notDefined(testString), false, 'String is not defined');
assert.equal(is.notDefined(false), false, 'Boolean is not defined');
assert.equal(is.notDefined(true), false, 'Boolean is not defined');
console.log('notDefined testing success');


// Nil
assert.equal(is.nil(), true, 'Undefined is nil');
assert.equal(is.nil(null), true, 'Null is nil');
assert.equal(is.nil(undefined), true, 'Undefined is nil');
assert.equal(is.nil(booleanObjFalse), false, 'Boolean object is not nil');
assert.equal(is.nil(booleanObjTrue), false, 'Boolean object is not nil');
assert.equal(is.nil(testArrayEmpty), false, 'Empty array is not nil');
assert.equal(is.nil(testArray), false, 'Array is not nil');
assert.equal(is.nil(testFunction), false, 'Function is not nil');
assert.equal(is.nil(testNum), false, 'Number is not nil');
assert.equal(is.nil(testObj), false, 'Object is not nil');
assert.equal(is.nil(testString), false, 'String is not nil');
assert.equal(is.nil(false), false, 'Boolean is not nil');
assert.equal(is.nil(true), false, 'Boolean is not nil');
console.log('Nil testing success');

// allNil
assert.equal(is.allNil(), true, 'Nothing passed in, is nil');
assert.equal(is.allNil(null), true, 'Null');
assert.equal(is.allNil(undefined), true, 'undefined');
assert.equal(is.allNil(null, undefined), true, 'undefined');
assert.equal(is.allNil('one', 'two'), false, 'List passed in, all not nil');
assert.equal(is.allNil('one', 'two', null), false, 'List passed in, some null but not undefined');
assert.equal(is.allNil('one', 'two', null, undefined), false, 'List passed in, at least one undefined');
console.log('allNil testing success');

// anyNil
assert.equal(is.anyNil(), true, 'Nothing passed in, is nil');
assert.equal(is.anyNil(null), true, 'Null');
assert.equal(is.anyNil(undefined), true, 'undefined');
assert.equal(is.anyNil(null, undefined), true, 'undefined');
assert.equal(is.anyNil('one', 'two'), false, 'List passed in, all not nil');
assert.equal(is.anyNil('one', 'two', null), true, 'List passed in, some null but not undefined');
assert.equal(is.anyNil('one', 'two', null, undefined), true, 'List passed in, at least one undefined');
console.log('anyNil testing success');

// notNil
assert.equal(is.notNil(), false, 'Undefined is nil');
assert.equal(is.notNil(null), false, 'Null is nil');
assert.equal(is.notNil(undefined), false, 'Undefined is nil');
assert.equal(is.notNil(booleanObjFalse), true, 'Boolean object is not nil');
assert.equal(is.notNil(booleanObjTrue), true, 'Boolean object is not nil');
assert.equal(is.notNil(testArrayEmpty), true, 'Empty array is not nil');
assert.equal(is.notNil(testArray), true, 'Array is not nil');
assert.equal(is.notNil(testFunction), true, 'Function is not nil');
assert.equal(is.notNil(testNum), true, 'Number is not nil');
assert.equal(is.notNil(testObj), true, 'Object is not nil');
assert.equal(is.notNil(testString), true, 'String is not nil');
assert.equal(is.notNil(false), true, 'Boolean is not nil');
assert.equal(is.notNil(true), true, 'Boolean is not nil');
console.log('notNil testing success');

// not
assert.equal(is.not(), true, 'Undefined is false so returns true');
assert.equal(is.not(null), true, 'null is false so returns true');
assert.equal(is.not(undefined), true, 'Undefined is false so returns true');
assert.equal(is.not(true), false, 'true will return false');
assert.equal(is.not(false), true, 'false will return true');
assert.equal(is.not(Boolean(true)), false, 'true will return false');
assert.equal(is.not(Boolean(false)), true, 'false will return true');
console.log('not testing success');

// Null
assert.equal(is.null(), false, 'Undefined is not null');
assert.equal(is.null(null), true, 'Null is null');
assert.equal(is.null(undefined), false, 'Undefined is not null');
assert.equal(is.null(booleanObjFalse), false, 'Boolean object is not null');
assert.equal(is.null(booleanObjTrue), false, 'Boolean object is not null');
assert.equal(is.null(testArrayEmpty), false, 'Empty array is not null');
assert.equal(is.null(testArray), false, 'Array is not null');
assert.equal(is.null(testFunction), false, 'Function is not null');
assert.equal(is.null(testNum), false, 'Number is not null');
assert.equal(is.null(testObj), false, 'Object is not null');
assert.equal(is.null(testString), false, 'String is not null');
assert.equal(is.null(false), false, 'Boolean is not null');
assert.equal(is.null(true), false, 'Boolean is not null');
console.log('Null testing success');

// allNull
assert.equal(is.allNull(), false, 'Nothing passed in, is null');
assert.equal(is.allNull('one', 'two'), false, 'List passed in, all not null');
assert.equal(is.allNull(null), true, 'Null');
assert.equal(is.allNull(undefined), false, 'undefined is not null');
assert.equal(is.allNull(null, undefined), false, 'undefined in not null');
assert.equal(is.allNull('one', 'two'), false, 'List passed in, all not nil');
assert.equal(is.allNull('one', 'two', null), false, 'List passed in, some null');
assert.equal(is.allNull('one', 'two', null, undefined), false, 'List passed in, at least one null');
console.log('allNull testing success');

// anyNull
assert.equal(is.anyNull(), false, 'Nothing passed in, is null');
assert.equal(is.anyNull(null), true, 'Null');
assert.equal(is.anyNull(undefined), false, 'undefined is not null');
assert.equal(is.anyNull(null, undefined), true, 'one null');
assert.equal(is.anyNull('one', 'two'), false, 'List passed in, all not null');
assert.equal(is.anyNull('one', 'two', null), true, 'List passed in, some null');
assert.equal(is.anyNull('one', 'two', null, undefined), true, 'List passed in, at least one null');
console.log('anyNull testing success');

// notNull
assert.equal(is.notNull(), true, 'Undefined is not null');
assert.equal(is.notNull(null), false, 'Null is null');
assert.equal(is.notNull(undefined), true, 'Undefined is not null');
assert.equal(is.notNull(booleanObjFalse), true, 'Boolean object is not null');
assert.equal(is.notNull(booleanObjTrue), true, 'Boolean object is not null');
assert.equal(is.notNull(testArrayEmpty), true, 'Empty array is not null');
assert.equal(is.notNull(testArray), true, 'Array is not null');
assert.equal(is.notNull(testFunction), true, 'Function is not null');
assert.equal(is.notNull(testNum), true, 'Number is not null');
assert.equal(is.notNull(testObj), true, 'Object is not null');
assert.equal(is.notNull(testString), true, 'String is not null');
assert.equal(is.notNull(false), true, 'Boolean is not null');
assert.equal(is.notNull(true), true, 'Boolean is not null');
console.log('notNull testing success');

console.log('is testing done');
