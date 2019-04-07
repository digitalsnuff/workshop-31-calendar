const path = require('path');
const express = require('express');
//const morgan = require('morgan');
//const bodyParser = require('body-parser');

require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});

const app = express();
require('./web/routing/base.router');

app.listen(process.env.PORT, () => {
    console.log('WORK')
})
