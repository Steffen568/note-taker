// import xpress
const express = require('express')
const app = express()

// create port
const PORT = process.env.PORT || 4001

// read incoming json data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// create paths within server
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
})