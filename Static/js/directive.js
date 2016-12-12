app
  .directive('alerts', ['$log', '$interval', function($log, $interval) {
    return {
    // priority: 0, 
    // template: '<div></div>', 
  　　templateUrl: '/Alert.html', 
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


// 编辑表单组件
app
  .directive('formUnit', ['$log', '$interval', function($log, $interval) {
    return {
    // priority: 0, 
    // template: '<div></div>', 
  　　templateUrl: '/formUnit.html', 
  　　replace: false, 
  　　transclude: true, 
  　　restrict: 'E', 
  　　scope: {
        item: '=',
        formItemMap: '=',        
        delete: '&'
      },
      controller: ['$scope', function alertsCtrl($scope) {
        function getItemNameList (itemMaps) {
          console.log($scope.formItemMap)
          return itemMaps
            .map(function(item) {
              var o = {}
              o[item.code] = item.normName
              return o
            })
            .reduce(function(pre, now){
              return Object.assign(pre, now)
            })
        }
        $scope.itemNameList = getItemNameList($scope.formItemMap)
      }]
    }
  }])
