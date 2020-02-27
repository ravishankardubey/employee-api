const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    first_name: String,
    last_name: String,
    age: Number,
    email: String,
    departmentId: Number
})

const EmployeeSchema = mongoose.model('employee', employeeSchema)

module.exports = EmployeeSchema;