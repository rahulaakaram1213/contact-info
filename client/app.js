"use strict";

var app = angular.module("contact-form", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: './templates/main.html',
            controller: 'ContactCtrl',
            controllerAs: 'vm'
        })
        .when('/add', {
            templateUrl: './templates/addModal.html',
            controller: 'ContactCtrl',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/main'
        });
});