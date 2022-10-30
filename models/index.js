const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Class = require('./class');
const Major = require('./major');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Class = Class;
db.Major = Major;

User.init(sequelize);
Class.init(sequelize);
Major.init(sequelize);

User.associate(db);
Class.associate(db);


module.exports = db;
