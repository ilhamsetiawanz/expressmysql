const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Article = sequelize.define('Article', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Article;
