import React, { useState } from 'react';
import axios from 'axios';

const UpdateItem = () => {
  const [foodName, setFoodName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [recipe, setRecipe] = useState('');
  const [isVeg, setIsVeg] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdate = async () => {
    try {
      // Send a PUT request to the backend API with the provided food name and updated values
      await axios.put(`http://localhost:3000/api/food/${foodName}`, {
        imageUrl,
        recipe,
        isVeg,
      });
      setIsUpdated(true);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h2>Update Item by Food Name</h2>
      <div className="mb-3">
        <label htmlFor="foodName" className="form-label">
          Food Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          New Image URL:
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="recipe" className="form-label">
          New Recipe:
        </label>
        <textarea
          className="form-control"
          id="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="isVeg" className="form-label">
          Is Veg:
        </label>
        <select
          className="form-select"
          id="isVeg"
          value={isVeg}
          onChange={(e) => setIsVeg(e.target.value === 'true')}
        >
          <option value="true">Veg</option>
          <option value="false">Non-Veg</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update Item
      </button>
      {isUpdated && <p>Item with food name "{foodName}" has been updated.</p>}
    </div>
  );
};

export default UpdateItem;
