import { Component } from 'react'
import Product from './product';
import  styled from 'styled-components';
import Adorn from "../images/Adorn1.jpg";
import Aker from "../images/Aker1.jpg";
import Calcutta from "../images/Calcutta1.jpg";
import Cameron from "../images/cameron1.jpg";
const Div=styled.div`

    display: flex;
    justify-content: space-around;
    margin: 60px 0 60px;
  
`
export default class Products extends Component {
  render() {
    return (
      <Div className='container'>
        <Product image={Adorn} name="Adorn" size="30 x 90" type="Glossy"/>
        <Product image={Aker} name="Aker" size="90 x 180" type="Matt"/>
        <Product image={Calcutta} name="Calcutta" size="75 x 150" type="Polished"/>
        <Product image={Cameron} name="Cameron" size="90 x 180" type="Matt"/>
      </Div>
    )
  }
}
