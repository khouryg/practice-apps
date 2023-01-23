const db = require('./db.js');

const model = {
  createInvoice(sale) {
    let sql = `INSERT INTO orders VALUES (${sale.session_id}, "${sale.name}", "${sale.email}", "${sale.password}", "${sale.address}", "${sale.phone}", "${sale.cc_num}", "${sale.cc_exp}", "${sale.zip}", "${sale.cvv}")`
    return db.queryAsync(sql);
  }
}

module.exports = model;