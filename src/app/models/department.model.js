const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    id: String,
    name: String
})

const DepartmentSchema = mongoose.model('DepartmentSchema', departmentSchema)

module.exports = DepartmentSchema;