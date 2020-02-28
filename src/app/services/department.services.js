const EMPLOYEE_MODEL = require('../models/employee.mode');
const DEPARTMENT_MODEL = require('../models/department.model');

exports.getAllDepartments = async () => {
    try {
        const departments = await DEPARTMENT_MODEL.find({});
        return departments;
    } catch (e) {
        throw Error('Error while fetching departments : [' + e.errmsg + ' ]');
    }
}

exports.getDepartment = async (departmentId) => {
    try {
        const department = await DEPARTMENT_MODEL.findOne({
            "id": departmentId
        });
        return department;
    } catch (e) {
        throw Error('Error while fetching department : [' + e.errmsg + ' ]');
    }
}

exports.addDepartment = async (departmentDetails) => {
    try {
        const maxId = await DEPARTMENT_MODEL.find({}, {
            "id": 1,
            "_id": 0
        }).sort({
            id: -1
        }).limit(1);
        departmentDetails['id'] = maxId[0]['id'] + 1;
        const deptObj = new DEPARTMENT_MODEL(departmentDetails);
        const department = await deptObj.save();
        return department;
    } catch (e) {
        throw Error('Error while adding new department : [' + e.errmsg + ' ]');
    }
}

exports.updateDepartment = async (departmentDetails) => {
    try {
        const department = await DEPARTMENT_MODEL.updateOne({
            "id": departmentDetails.id
        }, {
            $set: departmentDetails
        })
        return department;
    } catch (e) {
        throw Error('Error while updating department : [' + e.errmsg + ' ]');
    }
}

exports.deleteDepartments = async (departmentIds) => {
    try {
        const employeesOfDept = await EMPLOYEE_MODEL.find().distinct("departmentId");
        const departmentsWithActiveEmployees = departmentIds.filter(id => employeesOfDept.includes(id));
        if (departmentsWithActiveEmployees.length) {
            throw Error('DeparmentId(s) ' + departmentsWithActiveEmployees.join(', ') + ' have active employees');
        } else {
            const department = await DEPARTMENT_MODEL.deleteMany({
                "id": {
                    $in: departmentIds
                }
            })
            return department;
        }

    } catch (e) {
        throw Error('Error while deleting department(s) : [ ' + e.message || e.errmsg + ' ]');
    }
}