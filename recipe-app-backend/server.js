// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Food', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for your data
const foodSchema = new mongoose.Schema({
  imageUrl: String,
  recipe: String,
  food: String,
  isVeg: String,
});
const userSchema = new mongoose.Schema({
  username: String,
  email: String, // Add email field
  password: String,
});
const Food = mongoose.model('Food', foodSchema);
const User = mongoose.model('User', userSchema);
app.use(bodyParser.json());
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body; // Include email in request body

    // Check if the username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user document
    const newUser = new User({ username, email, password }); // Include email

    // Save the user document to the database
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for user login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the provided password matches the user's password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token and send it to the client
    const token = generateJWTToken(user);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Function to generate JWT token
function generateJWTToken(user) {
  const payload = {
    userId: user._id,
    username: user.username,
    email: user.email,
  };

  const secretKey = 'your-secret-key'; // Replace with a strong and secure key
  const options = { expiresIn: '1h' }; // Set the token expiration time

  return jwt.sign(payload, secretKey, options);
}
// Route to handle POST requests to store data
app.post('/api/food', async (req, res) => {
  try {
    const { imageUrl, recipe, food, isVeg } = req.body;

    // Create a new Food document
    const newFood = new Food({ imageUrl, recipe, food, isVeg });

    // Save the document to the database
    await newFood.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Add this route to your server.js or routes file
app.get('/api/food', async (req, res) => {
  try {
    const foods = await Food.find(); // Fetch all food items from the database
    res.json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/food/veg', async (req, res) => {
  try {
    const vegFoods = await Food.find({ isVeg: true }); // Fetch all "veg" items from the database
    res.json(vegFoods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/food/nonveg', async (req, res) => {
  try {
    const nonVegFoods = await Food.find({ isVeg: false }); // Fetch all "non-veg" items from the database
    res.json(nonVegFoods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/api/food/:foodName', async (req, res) => {
  try {
    const { foodName } = req.params;

    // Find and delete the item with the provided food name
    const deletedItem = await Food.findOneAndDelete({ food: foodName });

    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully', deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Import necessary modules and set up your Express app and database connection

// Add this route to your server.js or routes file
// Add a new route to search for items by name and veg status
app.get('/api/food/search', async (req, res) => {
  try {
    const { keyword, isVeg } = req.query;

    // Log the values for debugging
    // Define a filter object based on the query parameters
    const filter = {
      $or: [
        { food: { $regex: new RegExp(keyword, 'i') } },
        { recipe: { $regex: new RegExp(keyword, 'i') } },
      ],
    };

    if (isVeg !== undefined) {
      filter.isVeg = isVeg === 'true'; // Convert the string to a boolean
    }

    const searchResults = await Food.find(filter);

    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.put('/api/food/:foodName', async (req, res) => {
  try {
    const { foodName } = req.params;
    const { recipe, isVeg } = req.body;

    // Find the item with the provided food name and update its fields
    const updatedItem = await Food.findOneAndUpdate(
      { food: foodName },
      { recipe, isVeg },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item updated successfully', updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new route to handle food item search by name
// Start your server and listen on a port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
