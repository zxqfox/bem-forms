/**
 * @module validation_pattern
 */

modules.define('validation_pattern',
    function (provide) {

    provide(function (message, params) {
        var re = new RegExp(params.value);

        return function (val) {
            return !val || re.test(val)? null : message;
        };

    });

});
