angular.module('MyApp')
    .controller('MiPrimerController', function ($scope) {
        $scope.name = "Ari";
        $scope.sayHello = function () {
            $scope.greeting = "Hello " + $scope.name;
        }
    });

angular.module('MyApp').
    controller('driversControllern', function ($scope) {
        $scope.driversList = [
            {
                Driver: {
                    givenName: 'Sebastian',
                    familyName: 'Vettel'
                },
                points: 322,
                nationality: "German",
                Constructors: [
                    {name: "Red Bull"}
                ]
            },
            {
                Driver: {
                    givenName: 'Fernando',
                    familyName: 'Alonso'
                },
                points: 207,
                nationality: "Spanish",
                Constructors: [
                    {name: "Ferrari"}
                ]
            }
        ];
    });