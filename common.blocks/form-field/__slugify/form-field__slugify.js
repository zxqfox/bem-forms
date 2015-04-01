modules.define('form-field__slugify',
    function (provide) {

    /**
     * Slugify field names
     *
     * @param {String} name form field name
     * @returns {String} sluggified field name
     * @todo should it be in vanilla?
     * @todo do we need here camelCase2hypenized?
     */
    provide(function (name) {
        return name.replace(/[^a-z0-9\-]+/g, '-');
    });
});
