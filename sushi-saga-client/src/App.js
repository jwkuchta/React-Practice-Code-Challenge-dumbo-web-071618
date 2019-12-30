import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
// import Wallet from './components/Wallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      emptyPlates: [],
      eatenSushi: [],
      funds: 100 
    }
  }

  componentDidMount() {
    // fetch("http://localhost:3000/sushis/?_limit=10&_offset=10")
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => this.setState({allSushi: sushiData}))
    .catch(error => console.log(error))
  }

  buySushi = sushi => {
    this.setState({
      funds: this.state.funds - sushi.price, 
      eatenSushi: this.state.eatenSushi.concat(sushi)})
  }

  addFunds = (e, amount) => {
    e.preventDefault()

    this.setState({funds: this.state.funds + amount})
  } 

  render() {
    return (
      <div className="app">
        {/* <Wallet  addFunds={this.addFunds} /> */}
        <SushiContainer 
        sushi={this.state.allSushi} 
        funds={this.state.funds} 
        buySushi={this.buySushi} 
        eatenSushi={this.state.eatenSushi} />
        <Table funds={this.state.funds} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;

