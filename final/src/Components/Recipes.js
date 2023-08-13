// Recipes.js

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import "./Recipies.css"

const foodItems = [
  {
    imageUrl:
      'https://www.kannammacooks.com/wp-content/uploads/IMG_E8866-scaled.jpg',
    title: 'Idli',
    description: 'Description for Food Item 1',
  },
  {
    imageUrl:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/pulao-recipe.jpg.webp',
    title: 'Pulav',
    description: 'Description for Food Item 2',
  },
  {
    imageUrl:
      'https://www.thecuriouschickpea.com/wp-content/uploads/2020/11/homemade-roti-8.jpg',
    title: 'Roti',
    description: 'Description for Food Item 3',
  },
  {
    imageUrl:
      'https://cdn.cdnparenting.com/articles/2020/02/26162410/Rava-Sheera-Recipe.jpg',
    title: 'Kesri Bath',
    description: 'Description for Food Item 4',
  },
  {
    imageUrl:
      'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/puri-2.jpg',
    title: 'Puri',
    description: 'Description for Food Item 5',
  },
  {
    imageUrl:
      'https://fullofplants.com/wp-content/uploads/2018/11/vegan-halva-refined-sugar-free-2-ingredient-thumb-2.jpg',
    title: 'Halva',
    description: 'Description for Food Item 6',
  },
];

function Recipes() {
  const [collapseStates, setCollapseStates] = useState(
    new Array(foodItems.length).fill(false)
  );

  const handleCollapse = (index) => {
    const updatedStates = [...collapseStates];
    updatedStates[index] = !updatedStates[index];
    setCollapseStates(updatedStates);
  };

  return (
    <div>
      <Container>
        <Row className="mt-5">
          {foodItems.map((item, index) => (
            <Col key={index} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button 
                     className="button"
                    onClick={() => handleCollapse(index)}
                  >
                    {collapseStates[index] ? 'Close' : 'See Recipe'} 
                  </Button>
                </Card.Body>
                <Collapse in={collapseStates[index]}>
                  <Card.Footer>
                    <p>Collapsible content here</p>
                  </Card.Footer>
                </Collapse>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Recipes;
