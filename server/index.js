const express = require('express') ;

const {connection} = require('./config/db') ;

require('dotenv').config() ;
const app = express() ;

app.get('/',(req,res)=>{
    return res.send({
        msg:'this is base end point'
    })
})

const port = process.env.PORT ;

app.listen(port,async()=>{
    try {
        await connection
        console.log('db connection successfully') ;
    } catch (error) {
        console.log(error) ;
    }
    console.log(`app is running is ${port}`)
})