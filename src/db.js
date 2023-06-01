require('dotenv').config();
const { Sequelize } = require('sequelize');
const ProductModel=require("./models/Product")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, BD } = process.env;
const sequelize = new Sequelize(
DB_DEPLOY,
{
    logging: false, 
    native: false, 
    }
 )
 // const sequelize = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BD}`,
//    {
//       logging: false, 
//       native: false
//    }
// )
ProductModel(sequelize);
const { Product } = sequelize.models;

module.exports = {
    sequelize, ...sequelize.models
}