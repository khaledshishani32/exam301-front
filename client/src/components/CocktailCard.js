import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class CocktailCard extends Component {
    render() {
        return (
            <Card key={this.props.idx} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.poros.obj.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.poros.obj.strDrink}</Card.Title>
             
              <Button onClick={()=>this.poros.addToFav(this.poros.obj)} variant="primary">Add to Fav</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default CocktailCard
