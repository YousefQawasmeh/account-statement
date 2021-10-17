const dbConnection = require("../dbConnection");
const getAllCustomersTotals = async () => {
  try {
    console.log("data.rows ");
    const data = await dbConnection(2021).query(
      "SELECT name, MAX (phone) AS phone,case when MAX (phone) IS NOT NULL then TRUE else FALSE end as to_send, SUM (amount) AS sum FROM customer INNER JOIN record ON customer.name = record.customer_name GROUP BY name ORDER BY to_send DESC, sum DESC ;"
    );
    //FULL OUTER JOIN
    console.log("data.rows ", data.rows);
    return data.rows;
  } catch (err) {
    return err;
  }
};
module.exports = getAllCustomersTotals;
