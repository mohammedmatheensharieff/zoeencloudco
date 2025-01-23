import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/zoeencloud')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration_weeks: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const enrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  internshipId: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship', required: true },
  status: { type: String, enum: ['pending', 'active', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Internship = mongoose.model('Internship', internshipSchema);
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// Middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

// Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      email,
      password: hashedPassword,
      userType
    });

    await user.save();
    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid login credentials');
    }
    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get('/api/internships', async (req, res) => {
  try {
    const internships = await Internship.find();
    res.send(internships);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/api/enrollments', auth, async (req, res) => {
  try {
    const enrollment = new Enrollment({
      userId: req.user._id,
      internshipId: req.body.internshipId,
      status: 'pending'
    });
    
    await enrollment.save();
    res.status(201).send(enrollment);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/user/enrollments', auth, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ userId: req.user._id })
      .populate('internshipId');
    res.send(enrollments);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/enrollments', auth, async (req, res) => {
  try {
    if (req.user.userType !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }
    
    const enrollments = await Enrollment.find()
      .populate('userId')
      .populate('internshipId');
    res.send(enrollments);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});