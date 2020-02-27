const DEPARTMENT_SERVICE = require('../services/department.services');

exports.getAllDepartment = async (req, res, next) => {
    try {
        const DEPARTMENT = await DEPARTMENT_SERVICE.getAllDepartments()
        return res.status(200).json({
            status: 200,
            data: DEPARTMENT,
            message: "Succesfully retrieved department"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.getDepartment = async (req, res, next) => {
    try {
        const DEPARTMENT = await DEPARTMENT_SERVICE.getDepartment(req.params.departmentId);
        return res.status(200).json({
            status: 200,
            data: DEPARTMENT,
            message: "Succesfully fetched department"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.addDepartment = async (req, res, next) => {
    try {
        const DEPARTMENT = await DEPARTMENT_SERVICE.addDepartment(req.body);
        return res.status(200).json({
            status: 200,
            data: DEPARTMENT,
            message: "Succesfully added department"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.updateDepartment = async (req, res, next) => {
    try {
        const DEPARTMENT = await DEPARTMENT_SERVICE.updateDepartment(req.body);
        return res.status(200).json({
            status: 200,
            data: DEPARTMENT,
            message: "Succesfully updated department"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.deleteDepartment = async (req, res, next) => {
    try {
        const DEPARTMENT = await DEPARTMENT_SERVICE.deleteDepartments(req.body.departmentIds);
        return res.status(200).json({
            status: 200,
            data: DEPARTMENT,
            message: "Succesfully deleted department"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}