const getAllCustomersTotalsQuery = require("../database/queries/getAllCustomersTotals");
const qs = require("qs");

const getAllCustomersTotals = (req, res) => {
  getAllCustomersTotalsQuery()
    .then((allCustomers) => res.json(allCustomers))
    .catch((err) =>
      res
        .status(500)
        .json({ err: "error for getAllCustomersTotals controller" })
    );
};
module.exports = getAllCustomersTotals;
