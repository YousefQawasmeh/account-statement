const { Pool } = require("pg");
require("env2")("./config.env");

// const connectionString = process.env.DATABASE_URL2;
const connectionString = {
  2018: process.env.DATABASE_URL2018,
  "2019+2020": process.env.DATABASE_URL20192020,
  2021: process.env.DATABASE_URL2021,
};
if (!connectionString) {
  throw new Error("set DATABASE_URL");
}
const dbConnection = {
  2018: new Pool({
    connectionString: connectionString[2018],
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  "2019+2020": new Pool({
    connectionString: connectionString["2019+2020"],
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  2021: new Pool({
    connectionString: connectionString[2021],
    ssl: {
      rejectUnauthorized: false,
    },
  }),
};
module.exports = (year = 2021) => dbConnection[year];
