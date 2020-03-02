const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const SERVER_CONFIG = require('./config/server.config');
const EMPLOYEE_ROUTES = require('./routes/employee.routes');
const DEPARTMENT_ROUTES = require('./routes/department.routes');
const CONNECT_MONGO = require('./connection.mongodb');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

CONNECT_MONGO();

/**
 * Un comment below lines to Allow CORS in local server
 */
app.options('*', cors())
app.use(cors())

app.use('/employee', EMPLOYEE_ROUTES);
app.use('/department', DEPARTMENT_ROUTES);

app.listen(SERVER_CONFIG['PORT'], () => console.log('Application Running'));