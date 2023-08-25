import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Button, Form } from 'react-bootstrap'; // Import your UI components
import "./Addrecipe.css"
function AddRecipe() {
  const [dishName, setDishName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/recipes', {
        dishName,
        imageUrl,
        description,
      });
      console.log('Recipe added:', response.data);
    } catch (error) {
      console.error('Error adding recipe:', error.message);
    }
  };

  return (
    <div>
        <h2 className='mt-3'>Add Recipe</h2>
      <div className='fo'>
    
      <Form onSubmit={handleSubmit} className='align-content-centre'>
        <Form.Group controlId="dishName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>
         
        <Form.Group controlId="decription">
          <Form.Label>description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Recipe
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default AddRecipe;
