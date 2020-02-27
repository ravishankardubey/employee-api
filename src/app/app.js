const express = require('express');
const bodyParser = require('body-parser');
const SERVER_CONFIG = require('./config/server.config');
const EMPLOYEE_ROUTES = require('./routes/employee.routes');
const DEPARTMENT_ROUTES = require('./routes/employee.routes');
const CONNECT_MONGO = require('./connection.mongodb');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

CONNECT_MONGO();

// app.use('/employee', EMPLOYEE_ROUTES);
// app.use('/department', DEPARTMENT_ROUTES);

app.listen(SERVER_CONFIG['PORT'], () => console.log('Application Running'));