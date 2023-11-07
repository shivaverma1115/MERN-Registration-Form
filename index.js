const express = require('express');

const { connection } = require('./config/db');

require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.get('/', (req, res) => {
    return res.send({
        msg: 'this is base end point'
    })
})

const { getDataRoute } = require('./routes/getData.route');
app.use('/data', getDataRoute);

const { registerRoute } = require('./routes/register.route');
app.use('/register', registerRoute);

const {cloudinaryRouter} = require('./routes/cloudinary.route') ;
app.use('/upload',cloudinaryRouter) ;

const port = process.env.PORT || 8000;
app.listen(port, async () => {
    try {
        await connection
        console.log('db connection successfully');
    } catch (error) {
        console.log(error);
    }
    console.log(`app is running is ${port}`)
})
