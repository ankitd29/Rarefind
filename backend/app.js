const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/car-routes')
const router2 = require('./routes/manufacturer-routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/cars', router)
app.use('/manufacturers', router2)


mongoose.connect('mongodb+srv://Admin:HCAyaE5Cyi0HJBN3@cluster0.bwmf6mw.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('Connected to the database')).then(() => {
    app.listen(5000)
}).catch((err) => console.log(err))


//HCAyaE5Cyi0HJBN3