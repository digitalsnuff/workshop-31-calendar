const path = require('path');
const express = require('express');
//const morgan = require('morgan');
//const bodyParser = require('body-parser');

const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});

require('./web/routing/base.router');

app.listen(process.env.PORT, () => {
    console.log('WORK')
})
