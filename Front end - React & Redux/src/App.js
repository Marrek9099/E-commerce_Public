import React from 'react'
import {Switch, Route, Router } from 'react-router-dom'
import history from './components/history'
import Landing from './views/Landing'
import Basket from './views/Basket'
import ProductDetails from './views/ProductDetails'
import "./styles/main.css"


const App = () => {
    return (
        <Router history={history}>
            <Switch >
                <Route path='/' exact component={Landing}/>
                <Route path='/basket' exact component={Basket}/>
                <Route path='/:id' exact component={ProductDetails}/>
            </Switch>
        </Router>
    )
}

export default App

