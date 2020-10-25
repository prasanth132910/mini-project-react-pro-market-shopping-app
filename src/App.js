import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import axios from "axios"
import SelectedItem from './components/Item/SelectedItem'
import Cart from './components/Cart/Cart'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      cart: {},
      selectedItem: {},
      showCart: false
    }
  }

  componentDidMount() {
    axios.get("https://api.mocki.io/v1/7bd0682b")
      .then(response => {
        this.setState({ products: response.data.products })
      })
      .catch(error => console.log(error))
  }


  getItem = (description) => {
    this.setState({ selectedItem: description })
  }

  addToCart = (item) => {
    if (window.confirm("press"))
      this.setState(prevState => {
        return {
          cart: {
            ...prevState.cart,
            ...item
          }
        }
      })
  }

  displayCart = () => {
    this.setState(prevState => {
      return {
        showCart: !prevState.showCart
      }
    })

  }

  render() {

    return (
      <React.Fragment>
        <Router>
          <Navbar showCart={this.displayCart} totalItems={Object.keys(this.state.cart).length} />
          {this.state.showCart && <Cart cartItems={this.state.cart} />}
          <Switch>
            <Route exact path="/">
              <Home products={this.state.products} getItem={this.getItem} addToCart={this.addToCart} />
            </Route>
            <Route path="/item">
              <SelectedItem item={this.state.selectedItem} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
