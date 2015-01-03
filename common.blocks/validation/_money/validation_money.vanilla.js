/**
 * @module validation_money
 */

modules.define('validation_money',
    function (provide) {

    var MONEY_RE = /^-?\d+(\.\d{1,2})?$/;

    provide(function (message) {
        return function (val) {
            return !val || MONEY_RE.test(val)? null : message || 'Field should be filled with money amount';
        };
    });

});
