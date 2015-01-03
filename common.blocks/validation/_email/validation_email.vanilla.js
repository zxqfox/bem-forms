/**
 * @module validation_email
 */

modules.define('validation_email',
    function (provide) {

    // http://habrahabr.ru/post/175375/
    // или так? http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html
    // в идеале проверка на a/mx
    var EMAIL_RE = /.+@.+/;

    provide(function (message) {
        return function (val) {
            return !val || EMAIL_RE.test(val)? null : message || 'Field requires email inside';
        };
    });

});
