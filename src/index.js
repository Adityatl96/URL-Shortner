const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const urlRouter = require('./routes/urlRoutes')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/api',urlRouter)


async function start() {
  await connectDB()

  app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
  })
}

start()

