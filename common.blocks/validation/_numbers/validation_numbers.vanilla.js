/**
 * @module validation_numbers
 */

modules.define('validation_numbers',
    function (provide) {

    var NUMBERS_RE = /^\d+(\.\d+)?$/;

    provide(function (message) {
        return function (val) {
            return !val || NUMBERS_RE.test(val)? null : message || 'Should be a number (e.g. 123.45)';
        };
    });

});
