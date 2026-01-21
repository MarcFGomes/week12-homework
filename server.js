const express = require('express');
const { Pool } = require('pg');

const CLI = require("./src/index");
const ui = require('./src/ui');
const db = require('./src/queries');


const PORT = process.env.PORT || 5432;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


CLI();