app
  .directive('alerts', ['$log', '$interval', function($log, $interval) {
    return {
    // priority: 0, 
    // template: '<div></div>', 
  　　templateUrl: 'Alert.html', 
  　　replace: false, 
  　　transclude: true, 
  　　restrict: 'E', 
  　　scope: {
        items: '='
      },
      controller: ['$scope', function alertsCtrl($scope) {
        $scope.close = function(index) {
          $scope.items.splice(index, 1)
        }
      }]
    }
  }])