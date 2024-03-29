const fs = require("fs");
const dbConnection = require("./dbConnection");

const createDataBase = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();
const initDate = fs.readFileSync(`${__dirname}/initValue.sql`).toString();
const dbBuild = (year = 2021) => {
  return dbConnection(year)
    .query(createDataBase)
    .then((res) => {
      console.log("database is created successfully");
      dbConnection(year)
        .query(initDate)
        .then((res2) => {
          console.log("data inserted successfully");
        })
        .catch((err) => {
          console.log(err, "insert data is failed");
          throw err;
        });
    })
    .catch((err) => {
      console.log(err, "create database is failed");
      throw err;
    });
};
// dbBuild();
module.exports = dbBuild;
// dbBuild();
// dbConnection.query(createDataBase, (err, res) => {
//   console.log("database is connected successfully");
//   dbConnection.query(initDate, (err2, res2) => {
//     console.log("data inserted successfully");
//     if (err2) {
//       throw err2;
//     }
//   });
//   if (err) {
//     throw err;
//   }
// });
