modules.define('spec', ['validation', 'chai'], function(provide, Validation, chai) {

var expect = chai.expect;

describe('validation', function() {
    describe('without validators', function() {
        it('run should returns null by default', function() {
            var validators = Validation.create();
            expect(validators.run('anything')).to.be.null;
        });

        it.skip('async run should returns null by default', function(done) {
            var validators = Validation.create();
            validators.run('anything', function(err) {
                expect(err).to.be.null;
                done();
            });
        });
    });

    describe('with validators requiring length eq 2 and value not eq "42"', function() {
        var validators;
        beforeEach(function() {
            validators = Validation.create();

            // value should be empty or value length should be 2
            validators.push(function (val) {
                return (!val || val.length === 2)? null : 'wrong length';
            });

            // value should not be equal '42'
            validators.push(function (val) {
                return (!val || val !== '42')? null : '42 is denied, sorry';
            });
        });

        it('run on empty value should not return error', function() {
            expect(validators.run('')).to.be.null;
        });

        it('run on "xx" should not return error', function() {
            expect(validators.run('xx')).to.be.null;
        });

        it('run on "1" should return error', function() {
            expect(validators.run('1')).to.be.eq('wrong length');
        });

        it('run on "42" should return error', function() {
            expect(validators.run('42')).to.be.eq('42 is denied, sorry');
        });

        it.skip('async run on empty value should not return error', function(done) {
            validators.run('', function(err) {
                expect(err).to.be.null;
                done();
            });
        });

        it.skip('async run on "xx" should not return error', function(done) {
            validators.run('xx', function(err) {
                expect(err).to.be.null;
                done();
            });
        });

        it.skip('async run on "1" should return error', function(done) {
            validators.run('1', function(err) {
                expect(err).to.be.eq('wrong length');
                done();
            });
        });

        it.skip('async run on "42" should return error', function(done) {
            validators.run('42', function(err) {
                expect(err).to.be.eq('42 is denied, sorry');
                done();
            });
        });
    });
});

provide();

});
