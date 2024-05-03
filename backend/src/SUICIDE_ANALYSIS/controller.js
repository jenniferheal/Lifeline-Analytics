const pool = require('../../db')
const queries = require('./queries')

const getSuicides = (req, res) => {
  pool.query(queries.getSuicides, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getSuicides
}
