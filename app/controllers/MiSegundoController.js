var app = angular.module('MyApp');

app.controller("SimpleCtrl", function ($scope) {
    $scope.message = "Hello World";
});

app.factory("SimpleService", function () {

    var service;
    service = {
        getData: function () {
            return [{
                id: 1,
                name: "Mark"
            }];
        }
    };
    return service;
});
