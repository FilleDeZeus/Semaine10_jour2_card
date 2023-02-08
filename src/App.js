import React from 'react'
import Card from './components/card/card';
import './index.css';
import Img from './components/card/img/tree.jpg';


export const App = () => {
  return (
    <div>

    <Card _age={24} _bgcolor={'bg-red'} _height={'500px'} _img={Img} _nom={'Djender'} _prenom={'Enide'} _width={'300px'}/>
    <Card _age={24} _bgcolor={'bg-green'} _height={'300px'} _img={Img} _nom={'Djender'} _prenom={'Enide'} _width={'200px'}/>
    </div>
  )
}
