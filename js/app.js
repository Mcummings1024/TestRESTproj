// JavaScript source code
var app = angular.module('myApp', ['ngRoute']);

app.controller('MainController', ['postService', function(postService) {
    var self = this;

    self.posts = postService.posts;

    self.addPost = function () {
        if (!self.title || self.title === '') {
            return;
        }
        self.posts.push({
            title: self.title,
            link: self.link,
            upvotes: 0
        });
        self.title = '';
        self.link = '';
    };

    self.upvote = function (post) {
        post.upvotes++;
    };
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
