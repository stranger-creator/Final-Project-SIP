// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

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

// Create a Recipe schema
const recipeSchema = new mongoose.Schema({
  dishName: String,
  imageUrl: String,
  description: String,
  vegornon:String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Middleware
app.use(bodyParser.json());

// Create a new recipe
app.post('/recipes', async (req, res) => {
  try {
    const { dishName, imageUrl, description } = req.body;
    const recipe = new Recipe({ dishName, imageUrl, description, vegornon});
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
