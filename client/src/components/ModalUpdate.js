import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
export class ModalUpdate extends Component {
    render() {
        return (
            <>
            <form onSubmit={e=>this.props.updateCocktail(e)}>
                <label>Name :</label>
                <input type="text" value={this.props.name} onChange={this.props.updatenamefun} />
                <label>Img :</label>
                <input type="text" value={this.props.img} onChange={this.props.updateImgfun} />

                <input type="submit" value="update" />
            </form>
            </>
        )
    }
}

export default ModalUpdate
