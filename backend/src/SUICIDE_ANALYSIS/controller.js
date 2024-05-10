const pool = require('../../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('./queries')
require('dotenv').config()

const signup = async (req, res) => {
  const { username, password, email, countryCode } = req.body

  try {
    // Validate input data
    if (!username || !password || !email || !countryCode) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' })
    }

    // Check if the email is already in use
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Email is already in use' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Save the user with the hashed password to the database
    const newUser = await pool.query(queries.insertUserQuery, [username, hashedPassword, email, countryCode])

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.secretKey)

    // Set the JWT token as a cookie
    res.cookie('jwtToken', token, { httpOnly: true })

    // Respond with the newly registered user and the JWT token
    res.status(201).json({ user: newUser.rows[0], token })
  } catch (error) {
    console.error('Error executing query:', error)
    res.status(500).json({ error: 'Failed to register user' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    // Find user by email
    const user = await pool.query(queries.loginUserQuery, [email])
    if (user.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password 1' })
    }

    // Compare hashed password with user input
    const isPasswordValid = await bcrypt.compare(password, user.rows[0].password)
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' })
    }

    // Generate JWT token with user's ID
    const token = jwt.sign({ userId: user.rows[0].id }, process.env.secretKey)

    // Set cookie with generated token
    res.cookie('jwtToken', token, { httpOnly: true })

    // Log message to console for successful login
    console.log(`User ${user.rows[0].id} logged in successfully`)

    // Send user data
    res.status(200).json({ user: user.rows[0], token, message: 'Login successful' })
  } catch (error) {
    console.error('Error executing query:', error)
    res.status(500).json({ error: 'Failed to log in' })
  }
}

const logout = (req, res) => {
  try {
    // Clear the cookie containing the JWT token
    res.clearCookie('jwtToken')
    // Respond with a message indicating that the user has logged out successfully
    res.status(200).json({ message: 'User logged out successfully' })
  } catch (error) {
    console.error('Error logging out:', error)
    // If an error occurs, respond with a 500 status code and an error message
    res.status(500).json({ error: 'Failed to log out' })
  }
}

const getSuicides = (req, res) => {
  pool.query(queries.getSuicides, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getAllResources = (req, res) => {
  pool.query(queries.getAllResourcesQuery, (error, results) => {
    if (error) {
      console.error('Error executing query:', error)
      res.status(500).json({ error: 'Internal server error' })
    } else {
      res.status(200).json(results.rows)
    }
  })
}

const getOneResource = (req, res) => {
  const resourceId = req.params.id
  if (resourceId.length !== 3) {
    return res.status(400).json({ error: 'Invalid ID format', id: resourceId })
  }
  pool.query(queries.getOneResourceQuery, [resourceId], (error, results) => {
    if (error) {
      console.error('Error executing query:', error)
      res.status(500).json({ error: 'Internal server error' })
    } else {
      res.status(200).json(results.rows)
    }
  })
}


const addTestimonial = async (req, res) => {
  const { id_user, date, testimonial, approved } = req.body;

  try {
    if (!id_user || !testimonial) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newTestimonial = await pool.query(queries.insertTestimonialQuery, [
      id_user,
      testimonial
    ]);

    res.status(201).json(newTestimonial.rows[0]);
  } catch (error) {
    console.error('Error adding testimonial:', error);
    res.status(500).json({ error: 'Failed to add testimonial' });
  }
};


const getAllTestimonials = (req, res) => {
  pool.query(queries.getAllTestimonialsQuery, (error, results) => {
    if (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).json({ error: 'Failed to fetch testimonials' });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

module.exports = {
  signup,
  login,
  logout,
  getSuicides,
  getAllResources,
  getOneResource,
  addTestimonial,
  getAllTestimonials,
}
