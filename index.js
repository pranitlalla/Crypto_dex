const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/employee")

const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://pran:pran@cluster0.ezy7qh7.mongodb.net/").then(()=>console.log("MongoDb connected")).catch((err)=>console.log(err))

app.post("/SignUp", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log('Server is running on port 3001')
})