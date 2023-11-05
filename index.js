const express = require('express') ;

const {connection} = require('./config/db') ;

require('dotenv').config() ;
const app = express() ;
const cors = require('cors') ;
app.use(cors({
    origin:'*'
}))

app.use(express.json()) ;

app.get('/',(req,res)=>{
    return res.send({
        msg:'this is base end point'
    })
})

const {registerRoute} = require('./routes/register.route') ;
app.use('/register',registerRoute) ;

// static files 
const path = require('path') ;
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


const port = process.env.PORT || 8000 ;
app.listen(port,async()=>{
    try {
        await connection
        console.log('db connection successfully') ;
    } catch (error) {
        console.log(error) ;
    }
    console.log(`app is running is ${port}`)
})
