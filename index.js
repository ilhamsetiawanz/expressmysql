const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const Sequelize = require ('./src/config/db');
const Article = require ('./src/model/artikel');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database Synchronization
Sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
});

const articlesRouter = require('./src/routes/artikelroute');
app.get('/', (req, res) => {
    console.log('lorem')
})
app.use('/artikel', articlesRouter);

// Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});