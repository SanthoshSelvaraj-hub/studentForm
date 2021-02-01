const mysql = require("mysql2");

module.exports = async () =>
  new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: "taskzerodb.cm23ylawjbiy.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "KA01hh8469",
      database: "innodb",
    });
    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(connection);
    });
  });
