const { Sequelize } = require ("sequelize");
const { BDD }  = require ('../config');
const sequelize = new Sequelize(`postgres://${BDD.user}:${BDD.password}@${BDD.host}/${BDD.bdname}`
,{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define:  {
    	timestamps:false
    }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Pollutions = require("./pollution.model.js")(sequelize, Sequelize);
db.Utilisateurs = require("./utilisateur.model.js")(sequelize, Sequelize);

module.exports = db;