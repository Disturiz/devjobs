const mongoose = require('mongoose');
require('./config/db');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

mongoose.connect(process.env.DATABASE, {userNewUrlParser:true});

mongoose.connection.on('error', (error) => {
    console.log(error);
})