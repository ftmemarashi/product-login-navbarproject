import { Component } from 'react'
import Humbergermenu from './Components/Humbergermenu';
import Products from './Components/Products';
export default class App extends Component {
  render() {
    return (
      <div>
        <Humbergermenu/>
        <Products/>
      </div>
    )
  }
}
