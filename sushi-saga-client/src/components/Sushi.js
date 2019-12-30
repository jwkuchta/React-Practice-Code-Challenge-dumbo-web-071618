import React from 'react'

const Sushi = (props) => {

  const eatSushi = () => {
    if(props.funds - props.sushi.price >= 0) {
      props.buySushi(props.sushi)
    } else {
      alert('Insufficient funds!')
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {props.eatenSushi.includes(props.sushi) ?
          /* Tell me if this sushi has been eaten! */
          null : 
          <img src={props.sushi.img_url} width="100%" alt={props.sushi.name} />
          }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
        {console.log(props.sushi.img_url)}
      </h4>
    </div>
  )
}

export default Sushi