var StringMask = require('string-mask');
var maskFactory = require('mask-factory');

var nfeAccessKeyMask = new StringMask('0000 0000 0000 0000 0000' +
	' 0000 0000 0000 0000 0000 0000');

module.exports = maskFactory({
	validationErrorKey: 'nfeAccessKey',
	clearValue: function(rawValue) {
		return rawValue.replace(/[^0-9]/g, '').slice(0, 44);
	},
	format: function(cleanValue) {
		return (nfeAccessKeyMask.apply(cleanValue) || '').replace(/[^0-9]$/, '');
	},
	validate: function(value) {
		return value.length === 44;
	}
});
