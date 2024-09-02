require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const companyRoutes = require('./routes/company_1')

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next) => {
  console.log(req.path,req.method)
  next()
})

//routes
app.use('/api/data', companyRoutes)


const PORT = process.env.PORT || 3000;

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  //listen for request
    app.listen(PORT,() =>{
    console.log('listening on port..')
  })
})
.catch((err) => {
  console.log(err)
})
