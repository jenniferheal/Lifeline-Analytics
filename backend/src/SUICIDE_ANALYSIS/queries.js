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
`

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
`

const getAllTestimonialsQuery = `
  SELECT * FROM testimonials WHERE approved = 1;
`

const getSuicidesDataQuery = `
  SELECT year, SUM(suicides) AS total_suicides
  FROM suicides
  WHERE
      (id_stage = $1 OR $1 IS NULL) 
      AND (year BETWEEN $2 AND $3 OR ($2 IS NULL AND $3 IS NULL)) 
      AND (LOWER(id_country) = LOWER($5) OR ($5 IS NULL))
      AND (LOWER(gender) = LOWER($4) OR ($4 IS NULL AND gender = 'All'))
  GROUP BY year
  ORDER BY year;
`;

const getInfoUserQuery = `
  SELECT id, username, email, id_country
  FROM users
  WHERE id = $1;
`;



module.exports = {
  getSuicides,
  insertUserQuery,
  loginUserQuery,
  getAllResourcesQuery,
  getOneResourceQuery,
  insertTestimonialQuery,
  getAllTestimonialsQuery,
  updateUserQuery,
  getSuicidesDataQuery,
  getInfoUserQuery
}
