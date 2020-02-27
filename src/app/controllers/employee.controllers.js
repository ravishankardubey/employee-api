const EMPLOYEE_SERVICE = require('../services/employee.services');

exports.getAllEmployees = async (req, res, next) => {
    try {
        const EMPLOYEES = await EMPLOYEE_SERVICE.getAllEmployees()
        return res.status(200).json({
            status: 200,
            data: EMPLOYEES,
            message: "Succesfully retrieved employees"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.getEmployee = async (req, res, next) => {
    try {
        const EMPLOYEE = await EMPLOYEE_SERVICE.getEmployee(req.params.employeeId);
        return res.status(200).json({
            status: 200,
            data: EMPLOYEE,
            message: "Succesfully fetched employee"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.addEmployee = async (req, res, next) => {
    try {
        const EMPLOYEE = await EMPLOYEE_SERVICE.addEmployee(req.body);
        return res.status(200).json({
            status: 200,
            data: EMPLOYEE,
            message: "Succesfully added employee"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.updateEmployee = async (req, res, next) => {
    try {
        const EMPLOYEE = await EMPLOYEE_SERVICE.updateEmployee(req.body);
        return res.status(200).json({
            status: 200,
            data: EMPLOYEE,
            message: "Succesfully updated employee"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.deleteEmployees = async (req, res, next) => {
    try {
        const EMPLOYEE = await EMPLOYEE_SERVICE.deleteEmployees(req.body.employeeIds);
        return res.status(200).json({
            status: 200,
            data: EMPLOYEE,
            message: "Succesfully deleted employee"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}