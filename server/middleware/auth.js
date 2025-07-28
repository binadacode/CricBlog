import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  console.log('--- auth middleware called ---');
  console.log('Request headers:', req.headers);

  const authHeader = req.headers.authorization;
  console.log('Authorization header:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('No token provided or invalid format');
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  console.log('Extracted token:', token);

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token verified successfully');
    next();
  } catch (error) {
    console.log('Token verification failed:', error.message);
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default auth;
