// Load express
const express = require('express')
const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config')

// Bring in our packaged routes
const vegRoutes = require('./routes/vegstoreRoutes')

require('dotenv').config()

// Creates our express app (object)
const app = express()
// Connect to DB
mongoConfig()
// Identify our port
const port = process.env.PORT

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.use('/vegs', vegRoutes)

// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))