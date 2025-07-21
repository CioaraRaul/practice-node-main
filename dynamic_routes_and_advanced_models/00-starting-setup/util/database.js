const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Family03", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
