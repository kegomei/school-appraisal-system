var app = angular.module('SchoolAssessment', [])
// 配置
app
  .config(['$locationProvider', '$httpProvider', function($locationProvider,$httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'  
    var param = function(obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
      for(name in obj) {
        value = obj[name];
        if(value instanceof Array) {
          for(i=0; i<value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object) {
          for(subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
  }])

// 登录
app
  .controller('loginCtrl',['$scope', '$http', '$timeout', 'loginService', 'alertService', function loginCtrl ($scope, $http, $timeout, loginService, alertService) {
    $scope.items = []
    $scope.isSubmited = false
    $scope.user = {
      account: 'jsjxy2016',
      passwd: 'jsjxy2016'
    }
    $scope.handleLogin = function() {
      $scope.isSubmited = true
      if($scope.login.$valid) {
        loginService
          .login($scope.user)
          .then(function(success) {
            switch(success.status) {
              case 404: 
                alertService.add({
                  type: 'danger',
                  content: success.msg
                }, 1000)
                break;
              case 200: 
                alertService.add({
                  type: 'success',
                  content: success.msg
                }, 2000)
                $timeout(function() {
                  window.location.href = success.url
                }, 1000)
                break;
              default:
                console.error('未知名错误')
            }
          }, function(error) {
            alertService.add({
              type: 'danger',
              content: error.msg
            })
          })
      }
    }
    var i = 0;
    $scope.keypressHandle = function(ev) {
      console.log(i++)
    }
    document.addEventListener('keypress', function(ev) {
      if(ev.keyCode === 13) {
        $scope.handleLogin()
      }
    })
  }])

// 文件上传
app
  .controller('fileTestCtrl', ['$scope', 'testService', function fileTestCtrl ($scope, testService) {
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

// 创建考核
app
  .controller('addCreateCtrl', ['$scope', 'formService', 'alertService', function($scope, formService, alertService) {
    $scope.isEmpty = false
    // $scope.form = {

    // }
    $scope.submit = function() {
      if ($scope.createForm.$valid) {
        formService
          .createTitle({
            title: $scope.form.chistoryName
          })
          .then(function(success) {
            switch(success.status) {
              case 200:
                alertService.add({
                  type: 'success',
                  msg: success.msg
                })
                break
              case 304: 
                alertService.add({
                  type: 'error',
                  msg: success.msg
                })
                break 
            }
          }, function(err) {
            alertService.add({
              type: 'error',
              msg: err.msg
            })
          })
      } else {
        $scope.isEmpty = true
      }
    }
  }])
