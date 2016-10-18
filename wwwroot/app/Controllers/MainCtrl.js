"use strict";

app.controller("MainCtrl", function ($scope, AppFactory) {

    $scope.init = () => {
        console.log("MainCtrl running")
    }

    $scope.newProduct = {
        description: "",
        price: null
    }

    $scope.newCustomer = {
        firstName: "",
        lastName: ""
    }

    $scope.newOrder = {
        customerId: null
    }

    // PRODUCTS
    $scope.createNewProduct = () => {
        AppFactory.postProductToDatabase($scope.newProduct)
        $scope.newProduct.description = ""
        $scope.newProduct.price = null
        $scope.getProducts()
    }

    $scope.getProducts = () => {
        AppFactory.getProductsFromDatabase()
        .then(function (data) {
            $scope.displayProducts = data
        })
    }

    $scope.deleteProduct = (productId) => {
        AppFactory.deleteProductFromDatabase(productId)
        .then(function () {
            $scope.getProducts()
        })
    }

    // CUSTOMERS
    $scope.createNewCustomer = () => {
        AppFactory.postCustomerToDatabase($scope.newCustomer)
        $scope.newCustomer.firstName = ""
        $scope.newCustomer.lastName = ""
        $scope.getCustomers()
    }

    $scope.getCustomers = () => {
        AppFactory.getCustomersFromDatabase()
        .then(function (data) {
            $scope.displayCustomers = data
        })
    }

    // ORDERS
    $scope.getOrders = () => {
        AppFactory.getOrdersFromDatabase()
        .then(function (data) {
            $scope.displayOrders = data
        })
    }

    $scope.createNewOrder = () => {
        AppFactory.postOrderToDatabase($scope.newOrder)
        $scope.newOrder.customerId = null
        $scope.getOrders()
    }

})