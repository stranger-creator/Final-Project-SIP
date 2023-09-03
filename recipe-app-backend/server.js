// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
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

const Food = mongoose.model('Food', foodSchema);

app.use(bodyParser.json());

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
