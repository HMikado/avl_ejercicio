module.exports = {
    HOST: "99.90.128.46",
    USER: "monitor",
    PASSWORD: "monitor",
    DB: "db_monitor",
    dialect: "postgres",
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};