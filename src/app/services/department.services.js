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
    // check for Department dependency with employees before deleting
    // try {
    //     const department = await DEPARTMENT_MODEL.deleteMany({
    //         "id": {
    //             $in: departmentIds
    //         }
    //     })
    //     return department;
    // } catch (e) {
    //     throw Error('Error while deleting department(s) : [' + e.errmsg + ' ]');
    // }
    throw Error('Not implemented yet');
}