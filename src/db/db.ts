import mysql from 'mysql';
let dotenv = require('dotenv');
let util = require('util');

// Env vars
dotenv.config();
const host = 'sql240.main-hosting.eu';
const user = 'u173327603_status';
const password = '=!OvN2L1f!';
const database = 'u173327603_status';

// Setup Mysql
export var connection = mysql.createPool({ host, user, password, database });
connection.query = util.promisify(connection.query);
