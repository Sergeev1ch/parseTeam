require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const parse = require('./parse')
const router = require('./routes/index');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        parse();
    } catch (e) {
        console.log(e);
    }
}
start();