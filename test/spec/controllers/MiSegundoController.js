describe("app module", function () {
    beforeEach(module("MyApp"));

    describe("SimpleCtrl", function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign message to hello world", function () {
            controller("SimpleCtrl", {$scope: scope});
            expect(scope.message).toBe("Hello World");
        });
    });
});

describe("SimpleService", function(){

    beforeEach(module("MyApp"));

    var service;

    beforeEach(inject(function(SimpleService){
        service = SimpleService;
    }));

    describe("getData", function(){
        it("should return an array of items", function(){
            expect(service.getData()).toBeDefined();
        });
    });
});
