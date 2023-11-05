const express = require('express');
const registerRoute = express.Router();

const { registerModel } = require('../models/register.model');
registerRoute.get('/', async (req, res) => {
    const user = await registerModel.find();
    if (user) {
        return res.send(user) ;
    }
    else{
        return res.send('no user found') ;
    }
})
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

registerRoute.put('/:_id', async (req, res) => {
    const user = await registerModel.findOneAndUpdate({_id:req.params._id}, req.body, { new: true });
    if (!user) {
        return res.status(404).send({
            msg: 'User not found 404'
        })
    }
    return res.status(200).send(user)
})

registerRoute.delete('/:_id', async (req, res) => {
    const user = await registerModel.findOneAndDelete({_id:req.params._id});
    if (!user) {
        return res.status(404).send({
            msg: 'User not found 404'
        })
    }
    return res.status(200).send({
        msg:'delete successfully'
    })
})

module.exports = {
    registerRoute
}