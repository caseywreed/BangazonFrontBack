"use strict";

app.factory("AppFactory", function ($q, $http) {


    // PRODUCTS
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

    let postProductToDatabase = (newProduct) => {
        console.log("postProductToDatabase running")
        return $q((resolve, reject) => {
            $http.post(`http://localhost:5000/products`, JSON.stringify(newProduct))
            .success((data) => {
                resolve(data)
                console.log(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }

    let deleteProductFromDatabase = (productId) => {
        console.log("deleteProductFromDatabase running")
        return $q((resolve, reject) => {
            $http.delete(`http://localhost:5000/products/${productId}`)
            .success((data) => {
                resolve(data)
                console.log(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }


    // CUSTOMERS
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

    let postCustomerToDatabase = (newCustomer) => {
        console.log("postCustomerToDatabase running")
        return $q((resolve, reject) => {
            $http.post(`http://localhost:5000/customers`, JSON.stringify(newCustomer))
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

    let postOrderToDatabase = (newOrder) => {
        console.log("postOrderToDatabase running")
        return $q((resolve, reject) => {
            $http.post(`http://localhost:5000/orders`, JSON.stringify(newOrder))
            .success((data) => {
                resolve(data)
                console.log(data)
            })
            .error((error) => {
                reject(error)
            })
        })
    }



   return {
    getProductsFromDatabase,
    getCustomersFromDatabase,
    getOrdersFromDatabase,
    postProductToDatabase,
    postCustomerToDatabase,
    postOrderToDatabase,
    deleteProductFromDatabase
}

})
