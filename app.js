const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
// const { sequelize } = require('./models');
global.__basedir = __dirname + "/";
const demoapi = require('./routes/demoroute')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get('/master', (req, res) => {
    res.status(200).json({
        message: "Hello User!"
    })
})

app.use('/master/api', demoapi)

const port = (process.env.PORT || 4000)

//Starting a server
app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}/master`)
})
