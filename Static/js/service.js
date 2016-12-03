var restUrl = {
  'testSubmit': ''
}
app
  .factory('testService', ['$http', '$q', function($http, $q) {

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