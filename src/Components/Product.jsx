import  { Component } from 'react'
import styled from 'styled-components';
import './Product.css';
import down from "../images/down.svg";
import up from "../images/up.svg";

const Div=styled.div `
    margin: 10px;
    background-color: #ececec;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgb(189, 189, 189);
  
  
 img {
    width: 300px;
    height: 300px;

  }
img:hover {
    opacity: 0.6;
    transition: all .3s linear;
  }
p {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    padding: 20px;
  }
  h3 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 28px;
    padding: 20px;

  }
  h4 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 20px;
    padding: 20px;

  }
  
.counter {
    display: flex;
    align-items: center;
    border-top: 1px silver solid;
  }
  .counter img{
    width:25px;
    height:25px;
  }
  .counter span {
    background-color: rgb(62, 62, 202);
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
  }
  .deactive {
    opacity: 0.3;
  }
  
`
export default class product extends Component {
  render() {
    const {image,name,size,type}=this.props;
    return (
        <>
<Div className='container'>
<img src={image} alt="product image" />
<h3>
    {name}
</h3>
<h4>
    {size}
</h4>
<p>
    {type}
</p>
<div className="counter">
<img src={down} alt="arrow" />
<span>
    {}
</span>
<img src={up} alt="arrow" />
</div>
</Div>
        </>
    )
  }
}
