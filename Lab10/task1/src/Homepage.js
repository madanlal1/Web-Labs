
import React from 'react';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { Menu, Icon,Accordion, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import {cartItems} from './Product'

export class Homepage extends React.Component {

    constructor(props){
        super(props)
        this.state={countItems:0}
    }

    componentDidMount(){

        setInterval(()=>{
            this.setState({countItems:cartItems.length})
        },1)
    }

    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
    <Menu size='large'>
            <Menu.Item style={{cursor:"pointer"}}>
            <Link to="/">
                <Icon name='home' size='huge' />
            </Link>
            </Menu.Item>
          <Menu.Menu position='right'>


        <Menu.Item>
    
            <Link to="/Products">
                <h3>Products</h3>
            </Link>
          
        </Menu.Item>
            <Menu.Item style={{cursor:"pointer"}}>
            <Link to="/Cart">
            <label>{this.state.countItems}</label>
                <Icon name='cart arrow down' size='huge' />
            </Link>
  
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        </div>
      )
    }
}               