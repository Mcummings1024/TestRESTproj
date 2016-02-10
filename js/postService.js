//posts service code
var app = angular.module('myApp');

app.factory('postService', [function () {
    var o = {
        posts: []
    };
    return o;
}]);