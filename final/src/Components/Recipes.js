import React from "react";
import { Card } from "react-bootstrap";
import MyCollapsible from "./MyCollapsible";
import "./Recipies.css"
const Recipes = () => {
  const cardInfo = [
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Pizza",
      text: "sdcsdcsdc",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Burger",
      text: "scsdcsdc",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Juice",
      text: "sdcsdcsdc",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "hscscsd",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "sdcsdcs",
    }
  ];


  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <MyCollapsible/>
        </Card.Body>
      </Card>
      
    );

  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
 
};

export default Recipes;