const express = require('express');
const DEPARTMENT_CONTROLLER = require('../controllers/department.controllers');
const router = express.Router();

router.get('/getAllDepartments', DEPARTMENT_CONTROLLER['getAllDepartment']);

router.get('/getDepartment/:departmentId', DEPARTMENT_CONTROLLER['getDepartment']);

router.post('/addDepartment', DEPARTMENT_CONTROLLER['addDepartment']);

router.put('/updateDepartment', DEPARTMENT_CONTROLLER['updateDepartment']);

router.post('/deleteDepartments', DEPARTMENT_CONTROLLER['deleteDepartment']);

module.exports = router;