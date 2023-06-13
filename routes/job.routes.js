const express = require("express")
const { JobModel } = require("../models/job.model")
const jobRouter = express.Router()

jobRouter.post("/jobs",async(req,res)=>{
    const payload = req.body
    try {
        const job = new JobModel(payload)
        await job.save()
        res.send({"msg":"Job Posted Successfully"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

jobRouter.get("/jobs",async(req,res)=>{
    try {
        const jobs = await JobModel.find()
        res.send(jobs)
    } catch (error) {
        res.send(error)
    }
})

module.exports={jobRouter}