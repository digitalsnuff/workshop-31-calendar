const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
//const morgan = require('morgan');
//const bodyParser = require('body-parser');
const { connect } = require('./db');

require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});

const app = express();

require('./web/routing/base.router')(app);
require('./web/routing/calendar.router')(app);
require('./db.js');
require('./web/routing/events.router')(app);

(async () => {
    await connect();

    app.listen(process.env.PORT, () => {
        console.log(`Server was started at http://localhost"${process.env.PORT}`);
    })
});

app.listen(process.env.PORT, () => {
    console.log(`WORK PORT ${process.env.PORT}`);
});
