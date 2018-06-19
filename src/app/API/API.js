/**
 * Created by Van Phan
 */
"use strict";

let axios = require('axios');
const domain = "http://127.0.0.1:4040/api";

function encryptPassword(password, timestamp) {
    const passwordMD5 = md5(password).toString();
    const key = latin1.parse(sha256(timestamp).toString().substring(0, 16));
    return AES.encrypt(passwordMD5, key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).ciphertext.toString(CryptoJS.enc.Base64);
}


const httpClient = axios.create(); // create instance to make Timeout feature works

function request(data, callback) {
    let headers = {
        'Content-type': 'application/json'
    };
    if (data.headers.Authentication) {
        headers['Authentication'] = data.headers.Authentication;
    }
    const authOptions = {
        method: data.method,
        url: data.url,
        headers: headers,
        data: data.body,
        json: true,
        timeout: 60000,
    };

    return httpClient(authOptions)
        .then(function (response) {
            try {
                handleResponse(data.url, data, response.data, callback);
            } catch (e) {
                console.error(e);
            }
        })
        .catch(function (error) {
            console.log("################");
            callback(error, data);
        });
}

function handleResponse(url, req, res, callback) {
    if (!res || res.code === undefined) {
        callback(res, res);
        return;
    }
    switch(res.code) {
        case 0:
            callback(undefined, res);
            break;
        case 408:
            callback(undefined, res);
            console.log("Session expired, please login again!");
            return;
        case 500:
            console.log("Error");
        default:
            callback(res, res)
    }
}

exports.register = (name, email, password, cb) => {
    console.log("registering");
    const data = {
        method: 'POST',
        url: domain + "/users",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    };
    console.log("Request" , data.body);
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

exports.addProduct = (name, description, price, cb) => {
    const data = {
        method: 'POST',
        url: domain + "/products",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            description,
            price
        })
    };
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

exports.login = (email, password, cb) => {
    console.log("loggin in");
    const data = {
        method: 'POST',
        url: domain + "/auth/login",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    };
    console.log("Request" , data.body);
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

exports.products = (cb) => {
    console.log("loggin in");
    const data = {
        method: 'GET',
        url: domain + "/products",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    };
    console.log("Request" , data.body);
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

exports.activeProducts = (cb) => {
    const data = {
        method: 'GET',
        url: domain + "/products/active-products",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    };
    console.log("Request" , data.body);
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

exports.buy = (productID, cb) => {
    const data = {
        method: 'PUT',
        url: domain + "/products/" + productID,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status: "sold"})
    };
    console.log("Request" , data.body);
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

exports.deleteProduct = (productID, cb) => {
    const data = {
        method: 'DELETE',
        url: domain + "/products/" + productID,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    };
    console.log("Request" , data.body);
    request(data, (err, httpResponse, body) => {
        cb(err, body);
    });
}

