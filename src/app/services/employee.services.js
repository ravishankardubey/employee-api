const EMPLOYEE_MODEL = require('../models/employee.mode');

exports.getAllEmployees = async () => {
    try {

        const employees = EMPLOYEE_MODEL.aggregate([{
            $lookup: {
                from: "departments",
                localField: "departmentId",
                foreignField: "id",
                as: "dept"
            }
        }]);
        return employees;
    } catch (e) {
        throw Error('Error while fetching employees : ' + e.errmsg);
    }
}

exports.getEmployee = async (employeeId) => {
    try {
        const employee = await EMPLOYEE_MODEL.findOne({
            "id": employeeId
        });
        return employee;
    } catch (e) {
        throw Error('Error while fetching employee : ' + e.errmsg);
    }
}

exports.addEmployee = async (empoyeeDetails) => {
    try {
        const maxId = await EMPLOYEE_MODEL.find({}, {
            "id": 1,
            "_id": 0
        }).sort({
            id: -1
        }).limit(1);
        empoyeeDetails['id'] = maxId.length ? (maxId[0]['id'] + 1) : 100;

        const empObj = new EMPLOYEE_MODEL(empoyeeDetails);
        const employee = await empObj.save();
        return employee;
    } catch (e) {
        throw Error('Error while adding new employee : ' + e.errmsg);
    }
}

exports.updateEmployee = async (empoyeeDetails) => {
    try {
        const employee = await EMPLOYEE_MODEL.updateOne({
            "id": empoyeeDetails.id
        }, {
            $set: empoyeeDetails
        })
        return employee;
    } catch (e) {
        throw Error('Error while updating employee : ' + e.errmsg);
    }
}

exports.deleteEmployees = async (employeeIds) => {
    try {
        const employee = await EMPLOYEE_MODEL.deleteMany({
            "id": {
                $in: employeeIds
            }
        })
        return employee;
    } catch (e) {
        throw Error('Error while deleting employee(s) : ' + e.errmsg);
    }
}