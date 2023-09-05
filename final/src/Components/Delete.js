import React, { useState } from 'react';
import axios from 'axios';

const DeleteItem = () => {
  const [foodName, setFoodName] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      // Send a DELETE request to the backend API with the provided food name
      await axios.delete(`http://localhost:3000/api/food/${foodName}`);
      setIsDeleted(true);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Delete Item by Food Name</h2>
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
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Item
      </button>
      {isDeleted && <p>Item with food name "{foodName}" has been deleted.</p>}
    </div>
  );
};

export default DeleteItem;
