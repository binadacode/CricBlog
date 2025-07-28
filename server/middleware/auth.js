import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log('Auth header:', axios.defaults.headers.common['Authorization']);
    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // Extract the token string after 'Bearer '
    const token = authHeader.split(' ')[1];

    // Verify the token with the secret
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default auth;
