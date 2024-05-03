// queries.js
const getSuicides = 'SELECT * FROM suicides where suicides = 100'

const getAllResourcesQuery = `
  SELECT resources.id, resources.title, resources.description, resources.link, resources.id_country, country.name AS country_name
  FROM resources
  JOIN country ON resources.id_country = country.id;
`

const getOneResourceQuery = `
  SELECT resources.id, resources.title, resources.description, resources.link, resources.id_country, country.name AS country_name
  FROM resources
  JOIN country ON resources.id_country = country.id
  WHERE resources.id_country = $1;
`

module.exports = {
  getSuicides,
  getAllResourcesQuery,
  getOneResourceQuery
}
