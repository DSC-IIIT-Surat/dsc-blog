const express = require('express');
const User = require('../../models/user.model');    
const router = express.Router(); 


// Route1 : - "http://localhost:{port}/auth/newuser"
router.post('/newuser',[

    // Express Validation

], async(res,req) => {
    try {
        let success;
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            success = false;
            return res.status(400).json({success, error : "Sorry a user with same email already exists"});
        }

        // Password Hashing

        // Created new user
        user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });

        // Token Generation

        // const data = {
        //     user:{
        //         id:user.id,
        //     }
        // }

        success = true;
        res.json({success});

    } catch (error) {
        console.error(err.message);
        res.status(500).send("Some error occurred");
    }
});

// Route2 : - "http://localhost:{port}/auth/signin"
router.post('/signin', [

    // Express Validation

], async(res,req) => {

    const {email, password} = req.body;

    try {
        
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Some error occurred");
    }
});