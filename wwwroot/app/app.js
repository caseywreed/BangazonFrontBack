"use strict";

var app = angular.module("BangazonApp", ["ngRoute"])

app.config(function ($routeProvider) {

    $routeProvider.
        when("/", {
            templateUrl: "/app/partials/main.html",
            controller: "MainCtrl"
        }).
        otherwise('/')
})

