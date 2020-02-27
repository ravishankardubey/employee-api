const express = require('express');
const EMPLOYEE_CONTROLLER = require('../controllers/employee.controllers');
const router = express.Router();

router.get('/getAllEmployees', EMPLOYEE_CONTROLLER['getAllEmployees']);

router.get('/getEmployee/:employeeId', EMPLOYEE_CONTROLLER['getEmployee']);

router.post('/addEmployee', EMPLOYEE_CONTROLLER['addEmployee']);

router.put('/updateEmployee', EMPLOYEE_CONTROLLER['updateEmployee']);

router.post('/deleteEmployees', EMPLOYEE_CONTROLLER['deleteEmployees']);

module.exports = router;