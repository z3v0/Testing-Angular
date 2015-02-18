describe('Mi Primer Controller', function () {
    beforeEach(module('MyApp'));

    var ctrl, scope;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function ($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('MiPrimerController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function () {
            expect(scope.greeting).toBeUndefined();
            scope.sayHello();
            expect(scope.greeting).toEqual("Hello Ari");
        });
});

describe('Mi Primer Controller II', function () {
    beforeEach(module('MyApp'));

    var ctrl, scopeh;
    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function ($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scopeh = $rootScope.$new();
        // Create the controller
        ctrl = $controller('MiPrimerController', {
            $scope: scopeh
        });
    }));

    it('should create $scope.greeting when calling sayHello',
        function () {
            expect(scopeh.greeting).toBeUndefined();
            scopeh.sayHello();
            expect(scopeh.greeting).toEqual("Hello Ari");
        });
});

describe("operaciones aritméticas", function () {
    it("adicion", function () {
        var suma = 1 + 3;
        expect(suma).toEqual(4);
    });

    it("resta", function () {
        var resta = 2 - 1;
        expect(resta).toBeLessThan(4);
    });

    it("multiplicacion", function () {
        var multiplicacion = 2 * 10;
        expect(multiplicacion).toBeGreaterThan(9);
    });

    it("division", function () {
        var division = 15 / 3;
        expect(division).toEqual(5);
    });
});