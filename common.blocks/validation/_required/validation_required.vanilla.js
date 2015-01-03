/**
 * @module validation_required
 */

modules.define('validation_required',
    function (provide) {

    provide(function (message) {
        return function (val) {
            return val? null : message || 'Required field';
        };
    });

});
