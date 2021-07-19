
import {Products} from './Products'
import {Homepage} from './Homepage'
import {Cart} from './Cart'

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export class Home extends React.Component{

    render(){
        return(
            <Router>
                <Homepage />
                <Switch>

                <Route exact path="/">
                        
                </Route>


                    <Route exact path="/Products">
                        <Products />
                    </Route>
                    
                    <Route exact path="/Cart">
                        <Cart />
                    </Route>
                    
                </Switch>
            </Router>
        )
    }
}