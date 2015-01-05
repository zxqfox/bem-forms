/**
 * @module validation_numbers
 */

modules.define('validation_numbers',
    function (provide) {

    var NUMBERS_RE = /^\d+(\.\d+)?$/;

    provide(function (message, params) {
        message = message || 'Should be a number (e.g. 123.45)';
        if(params && params.min) {
            params.min = Number(params.min);
        }
        if(params && params.max) {
            params.max = Number(params.max);
        }

        return function (val) {
            if(!val) {
                return null;
            }

            if(!NUMBERS_RE.test(val)) {
                return message;
            }

            if(!params) {
                return null;
            }

            val = Number(val);
            if(params.min && val < params.min) {
                return message;
            }
            if(params.max && val > params.max) {
                return message;
            }

            return null;
        };
    });

});
