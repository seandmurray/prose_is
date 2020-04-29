/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE

exports.defined = (item) => {
	if (undefined === item) {
		return false;
	}
	return true;
};

exports.nil = (item) => {
	if (!exports.defined(item)) {
		return true;
	} else if (exports.null(item)) {
		return true;
	}
	return false;
};

exports.not = (item) => {
	if (exports.nil(item)) return true;
	if (item) return false;
	return true;
}

exports.null = (item) => {
	if (null === item) {
		return true;
	}
	return false;
};
