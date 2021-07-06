import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class FavCard extends Component {
    render() {
        return (
            <Card key={this.props.idx} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.poros.obj.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.poros.obj.strDrink}</Card.Title>
             
              <Button onClick={()=>this.props.deleteItem(this.props.idx)} variant="primary">Delete</Button>
              
              <Button onClick={()=>this.props.showUpdateForm(this.props.idx)}  variant="primary">Update</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default FavCard
