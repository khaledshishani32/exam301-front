import axios from 'axios'
import React, { Component } from 'react'
import CocktailCard from './CocktailCard'

export class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             url:process.env.REACT_APP_URL,
             cocktail:[],
             show :false
        }
    }

    componentDidMount =  async()=>{
        const newArr = await axios.get(`${this.state.url}/drinks`);
          
        this.setState({
            show: true,
            cocktail:newArr.data
            
        })
        console.log(this.state.cocktail)
    }
    

    addToFav = async (obj)=>{
        await axios.post(`${this.state.url}/addToFav` , obj);
    }
     
    render() {
        return (
           <>
                {
                    this.state.show && 
                    this.state.cocktail.map((obj , idx)=>{
                        return (
                            <CocktailCard
                            obj={obj}
                            idx={idx}
                            addToFav={this.addToFav}
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default Main
