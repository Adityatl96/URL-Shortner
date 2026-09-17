const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req , res)=>{
  res.send('url shortner is up')
})
async function start() {
  await connectDB()

  app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
  })
}

start()
