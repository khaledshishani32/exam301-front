import axios from 'axios';
import React, { Component } from 'react'
import FavCard from './FavCard';
import ModalUpdate from './ModalUpdate';
//import Modal from 'react-bootstrap/esm/Modal';

export class Favourite extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             url:process.env.REACT_APP_URL,
             cocktail:[],
             show :false,
             showForm : false,
             name:'',
             img :'',
             
             index: 0 
        }
    }
     
    componentDidMount =  async()=>{
        const newArr = await axios.get(`${this.state.url}/myFav`);
          console.log(newArr.data)
        this.setState({
            show: true,
            cocktail:newArr.data
        })
    }

    deleteItem = async (index) =>{
        const id = this.state.cocktail[index]._id;
        const newArr = await axios.delete(`${this.state.url}/delete/${id}`)
        this.setState({
           
            cocktail:newArr.data
        })
    }


    showUpdateForm = (idx) =>{
        const choosig = this.state.cocktail[idx];
        this.setState({
            showForm:true ,
            name : choosig.strDrink,
            img:choosig.strDrinkThumb,
           
            index:idx

        })
    }
    
    updatenamefun = (e=>this.setState({name:e.target.value}))
    updateImgfun = (e=>this.setState({img:e.target.value}))
    

    updateCocktail = async (e) =>{
        e.preventDefault();
        const id = this.state.cocktail[this.state.index]._id;

        const cockt = {
            name : this.state.name,
            img : this.state.img
        }

        let cocktailReq = await axios.put(`${this.state.url}/update/${id}` , cockt);

        this.setState({
           
            cocktail:cocktailReq.data
        })

    }


    render() {
        return (
            <div>
              
              {
                  this.showForm && 
                  <ModalUpdate 
                  name={this.state.name}
                  img = {this.state.img}
                  updatenamefun={this.updatenamefun}
                  updateImgfun={this.updateImgfun}
                  updateCocktail={this.updateCocktail}
                  />
              }



            {
                this.state.show && 
                this.state.cocktail.map((obj , idx)=>{
                    return (
                        <FavCard
                        obj={obj}
                        idx={idx}
                        
                        deleteItem={this.deleteItem}
                        showUpdateForm={this.showUpdateForm}
                        />
                    )
                })
            }
        </div>
        )
    }
}

export default Favourite
