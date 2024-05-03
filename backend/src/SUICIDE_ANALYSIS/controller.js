const pool = require('../../db')
const queries = require('./queries')

const getSuicides = (req, res) => {
  pool.query(queries.getSuicides, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}


const getAllResources = (req, res) => {
  pool.query(queries.getAllResourcesQuery, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(results.rows);
    }
  });
};


const getOneResource = (req, res) => {
  const resourceId = parseInt(req.params.id);
  if (isNaN(resourceId)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  pool.query(queries.getOneResourceQuery, [resourceId], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(results.rows);
    }
  });
};


module.exports = {
  getSuicides,
  getAllResources,
  getOneResource  
}
