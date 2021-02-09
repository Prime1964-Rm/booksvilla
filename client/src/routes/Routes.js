import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import HomePage from '../view/pages/homepage/HomePage'
import Login from '../view/pages/Login/Login'
import RegisterUser from '../view/pages/RegisterUser/Registration'
import NavBar from '../components/NavBar/NavBar.component'
import Footer from '../components/Footer/Footer'
import BookPage from '../BookPage'
import ProductPage from '../view/pages/productPage/ProductPage'

const Routes = () => {
    
    return (
        <React.Fragment>
            <Router>
                <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={RegisterUser} />
                <Route exact path='/pdf' component={BookPage} />
                <Route exact path='/productdetails' component={ProductPage}/>
                {/* <Route exact path = '/' /> */}
                </Switch>
                <Footer name={'Rishabh'}/>
            </Router>
        </React.Fragment>
    )
}

export default Routes