import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      from: 0,
      to: 4
    }
  }

  showMore = () => {
    this.setState(state => {
      if(state.to === 100) {
        return {from: 0, to: 4 }
      } else {
        return {from: state.from + 4, to: state.to + 4}
      }
    })
    console.log(this.state)
  }
  
  render() {

    const sushi = this.props.sushi.slice(this.state.from, this.state.to)

    return (
      <Fragment>
        <div className="belt">
          {sushi.map(sushi => 
          <Sushi 
          key={sushi.id} 
          sushi={sushi}
          funds={this.props.funds}
          buySushi={this.props.buySushi}
          eatenSushi={this.props.eatenSushi} />)}
          <MoreButton showMore={this.showMore} />
        </div>
      </Fragment>
    )
  }
  
}

export default SushiContainer