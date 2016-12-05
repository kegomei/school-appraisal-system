var restUrl = {
  'testSubmit': '',
  'login': '/login'
}
app
  .factory('testService', ['$http', '$q', function testService($http, $q) {
    return {
      submit: function(data) {
        var deferred = $q.defer()
        var promise = deferred.promise

        $http
          .post(restUrl.testSubmit, data)
          .success(function(data) {
            deferred.resolve(data)
          })
          .error(function(err) {
            deferred.reject(err)
          })
        return promise
      }
    }
  }])
  .factory('loginService', ['$http', '$q', function loginService ($http, $q) {
    return {
      login: function(data) {
        var deferred = $q.defer()
        var promise = deferred.promise
        $http.post(restUrl.login, data)
          .success(function(res) {
            deferred.resolve(res)
          })
          .error(function(err) {
            deferred.reject(err)
          })
        return promise
      }
    }
  }])
  .factory('alertService', ['$rootScope', function alertService ($rootScope) {
    $rootScope.alerts = [];
    return {
      add: function (opt) {
        $rootScope.alerts.push(opt)
        if($rootScope.alerts.length>=3) {
          $rootScope.alerts.shift()
        }
      }
    }
  }])