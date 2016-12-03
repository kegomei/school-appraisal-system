var app = angular.module('SchoolAssessment', [])


app
  .controller('divCtrl', ['$scope', function($scope) {
    $scope.name = 'looading'
  }])
  .controller('fileTestCtrl', ['$scope', 'testService', function($scope, testService) {
    $scope.lists = []
    $scope.handleSubmit = function() {
      testService
        .submit({
          name: $scope.fileName
        })
        .then(function(data) {
          console.log(data)
          $scope.lists.push(data)
        }, function(err) {
          console.error(err)
        })
    }
  }])