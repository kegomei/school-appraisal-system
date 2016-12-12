var restUrl = {
  'testSubmit': '',
  'login': '/login',
  'form': {
    createTitle: 'form/createTitle',
    getCategory: 'form/getCategory'
  }
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
  // 登录 restful
  .factory('loginService', ['$http', '$q', 'generateService', function loginService ($http, $q, generateService) {
      return generateService({
        login: restUrl.login
      })
  }])
  .factory('formService', ['$http', '$q', 'generateService', function formService ($http, $q, generateService) {
    return generateService(restUrl.form)
  }])
  // 提示框 
  .factory('alertService', ['$rootScope', '$timeout', function alertService ($rootScope, $timeout) {
    $rootScope.alerts = [];
    return {
      add: function (opt, delay) {
        $rootScope.alerts.push(opt)
        $timeout(function() {
          $rootScope.alerts.shift()
        }, delay)
      }
    }
  }])
  .factory('generateService', ['$http', '$q', function($http, $q) {
    return function (obj) {
        if(_.isObject(obj)){
          let keyArr = Object.keys(obj);
          return keyArr
            .map(function(item, index){
              var o = {}
              o[item] = function (data) {
                  var deferred = $q.defer()
                  var promise = deferred.promise
                  $http
                    .post(obj[item], data)
                    .success(function(data) {
                      deferred.resolve(data)
                    })
                    .error(function(err) {
                      deferred.reject(err)
                    })
                  return promise
                }
              return o
            })
            .reduce(function(pre, now) {
              return Object.assign(pre, now)
            })
        }
        else {
          console.error('obj should be a Object')
        }
      }
  }])