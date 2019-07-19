import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";
import axios from 'axios';


export default function CardBodyExample() {
        const [name, setName] = useState([]);
        const [height, setHeight] = useState([]);
        const [mass, setMass] = useState([]);
        const [haircolor, setHaircolor] = useState([]);
        const [eyecolor, setEyecolor] = useState([]);
        const [birthyear, setBirthyear] = useState([]);
        const [gender, setGender] = useState([]);
        useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/1/`)
        .then( res => {
            console.log(res.data);
            const name = res.data.name;
            setName(name);
            const height = res.data.height;
            setHeight(height);
            const mass = res.data.mass;
            setMass(mass);
            const haircolor = res.data.hair_color;
            setHaircolor(haircolor);
            const eyecolor = res.data.eye_color;
            setEyecolor(eyecolor);
            const birthyear = res.data.birth_year;
            setBirthyear(birthyear);
            const gender = res.data.gender;
            setGender(gender);


        });
        }, []);


  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg top src="https://place-hold.it/300x200" />
            <CardBody>
              <p>{name}</p>
              <p>Gender: {gender}</p>
              <p>Height: {height}</p>
              <p>Mass: {mass}</p>
              <p>Hair Color: {haircolor}</p>
              <p>Eye Color: {eyecolor}</p>
              <p>Birth Year: {birthyear}</p>

            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardBody>
              <p>This is the body of the card.</p>
            </CardBody>
            <CardImg bottom src="https://place-hold.it/300x200" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}