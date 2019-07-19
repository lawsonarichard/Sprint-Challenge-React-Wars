import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

const Cards = ({ characters }) => (
       
     <div className="cardWrapper">
                            {characters.map(character => {
        return  (
            <Container> 
    <Row>
        <Col>
          <Card>
            
            <CardBody>
    
            <p>{character.name}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair-Color: {character.hair_color}</p>
            <p>DOB: {character.birth_year}</p>
            </CardBody>
            </Card>
            </Col>
            </Row>  
            </Container>
        )
       
        
       


        })}
         </div>
        
    )





    
export default Cards;
