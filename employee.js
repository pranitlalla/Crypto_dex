const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String, 
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employee", EmployeeSchema)
module.exports =  EmployeeModel