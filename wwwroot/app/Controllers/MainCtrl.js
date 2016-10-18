"use strict";

app.controller("MainCtrl", function ($scope, AppFactory) {

    $scope.init = () => {
        console.log("MainCtrl running")
    }

    $scope.newProduct = {
        description: "",
        price: null
    }

    $scope.createNewProduct = () => {
        console.log($scope.newProduct)
    }

    $scope.getProducts = () => {
        AppFactory.getProductsFromDatabase()
        .then(function (data) {
            $scope.displayProducts = data
        })
    }

    $scope.getCustomers = () => {
        AppFactory.getCustomersFromDatabase()
        .then(function (data) {
            $scope.displayCustomers = data
        })
    }

    $scope.getOrders = () => {
        AppFactory.getOrdersFromDatabase()
        .then(function (data) {
            $scope.displayOrders = data
        })
    }

})