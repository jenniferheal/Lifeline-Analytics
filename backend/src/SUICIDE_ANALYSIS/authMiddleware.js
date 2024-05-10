const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies.jwtToken || req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized, token missing' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ error: 'Unauthorized, invalid token' });
  }
};

module.exports = authenticate;