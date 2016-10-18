"use strict";

app.factory("AppFactory", function ($q, $http) {


    let getProductsFromDatabase = () => {
        console.log("getProductsFromDatabase running")
        return $q((resolve, reject) => {
            $http.get(`http://localhost:5000/products`)
            .success((data) => {
                resolve(data)
                console.log(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }

    let getCustomersFromDatabase = () => {
        console.log("getCustomersFromDatabase running")
        return $q((resolve, reject) => {
            $http.get(`http://localhost:5000/customers`)
            .success((data) => {
                resolve(data)
                console.log(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }

    let getOrdersFromDatabase = () => {
        console.log("getOrdersFromDatabase running")
        return $q((resolve, reject) => {
            $http.get(`http://localhost:5000/orders`)
            .success((data) => {
                resolve(data)
                console.log(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }



   return {getProductsFromDatabase, getCustomersFromDatabase, getOrdersFromDatabase}

})