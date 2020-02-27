const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: String
})

const DepartmentSchema = mongoose.model('department', departmentSchema)

module.exports = DepartmentSchema;