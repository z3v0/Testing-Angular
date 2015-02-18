describe('Test resource', function () {
    beforeEach(module('ngResource'));

    it('Espero que sea verdadero', function () {
        expect(true).toBe(true);
    });

    it('Podria inyectar una dependencia', inject(function ($resource) {
        expect($resource).toBeDefined();
    }));
});
