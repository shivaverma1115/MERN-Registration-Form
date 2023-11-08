const express = require('express');
const getDataRoute = express.Router();

const { registerModel } = require('../models/register.model');


// ================= C R U D =======================

getDataRoute.post('/', async (req, res) => {
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

getDataRoute.get('/', async (req, res) => {
    const { first_name, email, location, status, gender ,limit,skip} = req.query;

    let query = {};
    if (first_name) {
        query.first_name = { $regex: first_name, $options: "i" };
    }
    if (email) {
        query.email = { $regex: email, $options: "i" };
    }
    if (location) {
        query.location = { $regex: location, $options: "i" };
    }
    if (status) {
        query.status = {$regex: status, $options: "i" };
    }
    if (gender) {
        query.gender = {$regex: gender, $options: "i" };
    }


    const users = await registerModel.find(query).limit(limit).skip(skip) ;
    res.send(users)
})

getDataRoute.put('/:_id',async(req,res)=>{
    const user = await registerModel.findOneAndUpdate({_id:req.params._id}, req.body, { new: true })
    if( user ){
        return res.send({
            msg:"Updated Successfully"
        })
    }
    return res.send({msg:"Please try again later"}) ;
})

getDataRoute.delete('/:_id',async(req,res)=>{
    const user = await registerModel.findOneAndDelete({_id:req.params._id})
    if( user ){
        return res.send({
            msg:"Delete Successfully"
        })
    }
    return res.send({msg:"Please try again later"}) ;
})


module.exports = {
    getDataRoute
}