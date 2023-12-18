const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/dbConnection')
const cors = require('cors')

const bookRoutes = require('./routes/bookRoutes')

dotenv.config({ path: './config/config.env' })
connectDB()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use('/books', bookRoutes)



app.listen(PORT, console.log(`server listening on port ${PORT}`))