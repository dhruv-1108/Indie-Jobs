const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const signUpInfoTemplate = require("../Models/Models")


// when user is on /signup page 

router.post('/signup', (request, response) => {
    const signedUser = new signUpInfoTemplate({
        fullName: request.body.fullName,
        email: request.body.email,
        password: request.body.password
    })

    signedUser.save() // here saving the data of that current user
    .then(data => {
        response.json(data);
    })
    .catch(error => {
        response.json(error);
    })
})

module.exports = router 