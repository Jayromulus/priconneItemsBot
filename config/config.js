require('dotenv').config();
module.exports =
{
  "development": {
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 5432,
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_data"
  },
  "test": {
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 5432,
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_data"
  },
  "production": {
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 5432,
    "seederStorage": "sequelize",
    "seederStorageTableName": "sequelize_data"
  }
}
