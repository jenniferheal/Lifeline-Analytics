// queries.js

const getSuicides = 'SELECT * FROM suicides where suicides = 100'

const insertUserQuery = `
  INSERT INTO users (username, password, email, id_country)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`


const updateUserQuery = `
  UPDATE users
  SET
    username = COALESCE($1, username),
    password = COALESCE($2, password),
    email = COALESCE($3, email),
    id_country = COALESCE($4, id_country)
  WHERE id = $5
  RETURNING *;
`;


const loginUserQuery = `
  SELECT * FROM users
  WHERE email = $1;
`

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

const insertTestimonialQuery = `
  INSERT INTO testimonials (id_user, testimonial)
  VALUES ($1, $2)
  RETURNING *;
`;


const getAllTestimonialsQuery = `
  SELECT * FROM testimonials WHERE approved = 1;
`;


module.exports = {
  getSuicides,
  insertUserQuery,
  loginUserQuery,
  getAllResourcesQuery,
  getOneResourceQuery,
  insertTestimonialQuery,
  getAllTestimonialsQuery,
  updateUserQuery
}
