import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import '../assets/css/Home.css';
import { Pizzas } from '../utils/Pizzas';

const Home = () => {

  const [listaPizzas, setListaPizzas] = useState([]);

  useEffect(() => {consultarApi()}, 
    []);

  const consultarApi = async () => {
    const url = 'http://localhost:5001/api/pizzas'

    const response = await fetch(url);
    const data = await response.json();

    setListaPizzas(data);
  };

  const renderPizza = listaPizzas.map((pizza) => {
    return (
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />
    );
  });

  return (
    <div className='Home'>
      <Header />
      <div className='card-container'>
        {renderPizza}
      </div>
    </div>
  );
};

export default Home;