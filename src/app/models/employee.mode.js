const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    age: Number,
    email: String,
    department: String
})

const EmployeeSchema = mongoose.model('EmployeeSchema', employeeSchema)

module.exports = EmployeeSchema;