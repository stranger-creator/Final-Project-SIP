// Recipes.js

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import "./Nonveg.css"

const foodItems = [
  {
    imageUrl:
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg',
    title: 'chicken kebab',
    description: 'Description for Food Item 1',
  },
  {
    imageUrl:
      'https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp',
    title: 'Mutton biriyani',
    description: 'Description for Food Item 2',
  },
  {
    imageUrl:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/egg-curry-recipe.jpg',
    title: 'Egg curry',
    description: 'Description for Food Item 3',
  },
  {
    imageUrl:
    'https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg',
    title: 'Fish fry',
    description: 'Description for Food Item 4',
  },
  {
    imageUrl:
      'https://www.onceuponachef.com/images/2021/12/Omelette-1200x1626.jpg',
    title: 'omlette',
    description: 'Description for Food Item 5',
  },
  {
    imageUrl:
      'https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2-500x500.jpg',
    title: 'chicken curry',
    description: 'Description for Food Item 6',
  },
];

function Nonveg() {
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
        <h1>All Nonveg items here!!</h1>
      <Container>
        <Row className="mt-5">
          {foodItems.map((item, index) => (
            <Col key={index} md={4} className='mb-5'>
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

export default Nonveg;
