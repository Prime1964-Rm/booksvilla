import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom'
import HomePage from '../view/pages/homepage/HomePage'
import Login from '../view/pages/Login/Login'
import RegisterUser from '../view/pages/RegisterUser/Registration'
import NavBar from '../components/NavBar/NavBar.component'
import Footer from '../components/Footer/Footer'
import BookPage from '../BookPage'
import ProductPage from '../view/pages/productPage/ProductPage'
import { connect } from 'react-redux'
import { setAuthToken } from '../redux/auth/authAction'


// const PrivateRoute = ({ component: Component, ...rest }) => {
//     console.log("this is"+ Auth.isLoggedIn);
//     return(

//     <Route {...rest} render={(props) => (
//       Auth.isLoggedIn === true
//         ? <Component {...props} />
//         : <Redirect to='/' />
//     )} />
//   )}

// let currentAuthToken = localStorage.getItem('jwt')


const Routes = ({ authToken, setAuthToken }) => {
    console.log("ROUTE AUTH TOKEN", authToken)
    console.log(authToken)

    // useEffect(() => {
    //     refreshAuthToken()
    // }, [])

    // const refreshAuthToken = () => {
    //     if (currentAuthToken) {
    //         setAuthToken(currentAuthToken)
    //     }
    // }

    // const PrivateRoute = ({ component: Component, ...rest }) => {
    //     // console.log("this is"+ Auth.isLoggedIn);
    //     return (
    //         <Route {...rest} render={(props) => (
    //             (currentAuthToken || authToken)
    //                 ? <Component {...props} />
    //                 : <Redirect to='/login' />
    //         )} />
    //     )
    // }

    // const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    //     return (
    //         // restricted = false meaning public route
    //         // restricted = true meaning restricted route
    //         <Route {...rest} render={props => (
    //             (currentAuthToken || authToken) && restricted ?
    //                 <Redirect to="/" />
    //                 : <Component {...props} />
    //         )} />
    //     );
    // };


    return (
        <React.Fragment>
            <Router>
                <Switch>

                    <Route exact path='/signup' restricted={true} component={RegisterUser} />
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/login' restricted={true} component={Login} />
                    <Route exact path='/pdf' component={BookPage} />
                    <Route exact path='/productdetails' component={ProductPage} />
                    {/* <Route exact path = '/' /> */}
                </Switch>
                <Footer name={'Rishabh'} />
            </Router>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        authToken: state.login.authToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthToken: (item) => { dispatch(setAuthToken(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)