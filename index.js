const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { jobRouter } = require("./routes/job.routes")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/",jobRouter)
app.listen(process.env.port,async()=>{
    try {
        await mongoose.connect(process.env.mongoURL)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running at port ${process.env.port}`)
})