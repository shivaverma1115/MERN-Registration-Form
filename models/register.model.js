const mongoose = require('mongoose') ;

const registerSchema= mongoose.Schema({
    first_name:{type:String ,require:true},
    last_name:{type:String ,require:true},
    email:{type:String ,require:true},
    mobile_no:{type:Number ,require:true},
    location:{type:String ,require:true},
    profile_img:{type:String ,require:true},
    status:{type:String ,require:true},
    gender:{type:String ,require:true},
},{timestamps: true})

const registerModel = mongoose.model('register',registerSchema) ;
module.exports={
    registerModel
}