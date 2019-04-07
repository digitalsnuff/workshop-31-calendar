const path = require('path');
const express = require('express');
//const morgan = require('morgan');
//const bodyParser = require('body-parser');

require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});

sync() => {
    await connect();

    // Start

    app.listen(process.env.PORT, () => {
        console.log()
    })
}
