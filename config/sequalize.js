module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "toor",
  PORT:3306,
  DB: "rehberDB",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};