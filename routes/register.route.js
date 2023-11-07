const express = require('express');
const registerRoute = express.Router();

const { registerModel } = require('../models/register.model');
registerRoute.post('/', async (req, res) => {
    const { first_name, last_name, email, mobile_no, location, profile_img, gender, status } = req.body;
    const user = await registerModel.findOne({ email: email });
    if (user) {
        return res.send({
            msg: 'Email is already used, Try another'
        })
    }
    const new_user = new registerModel({
        first_name,
        last_name,
        email,
        mobile_no,
        location,
        profile_img,
        gender,
        status
    })
    await new_user.save() ;
    return res.send({
        msg:'Successfully Registered'
    })
})

module.exports = {
    registerRoute
}