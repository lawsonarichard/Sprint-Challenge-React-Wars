import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/cards/cards';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

        
        useEffect(() => {
        axios
        .get(`https://swapi.co/api/people`)
        .then( res => {
         console.log("I'm working", res);
            setCharacters(res.data.results);
        });
        }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards characters={characters}/>
    </div>
  );
}

export default App;
