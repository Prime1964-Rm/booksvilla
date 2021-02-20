import React, { Component, useEffect, useState } from 'react'
import './navbar-styles.scss'
import CartLogo from '../../assets/Logos/fastcart.png'
import { toggleHidden } from '../../redux/cart/cartActions'
import { connect } from 'react-redux'
import cartReducer from '../../redux/cart/cartReducer'
import { Cart } from '../Cart'
import { Link, useHistory } from 'react-router-dom'
import { setAuthToken } from '../../redux/auth/authAction'
import { useMediaQuery } from 'react-responsive'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const NavBar = ({ itemCount, toggleHidden, hidden, authToken, setAuthToken }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 576px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const [hideNav, setHideNav] = useState(false)
    const [display, setDisplay] = useState("")
    const [toggle, setToggle] = useState(true)

    let history = useHistory()

    const logout = () => {
        localStorage.removeItem("jwt");
        setAuthToken(null)
        console.log(authToken)
        history.push('/login')
    }


    const defaultProps = {
        color: 'primary',
        children: <img src={CartLogo} />,
    };



    const theme = createMuiTheme({
        palette: {
            primary: {
                main:'rgb(0, 200, 83)'
            },
            text:{
                primary:'rgb(255, 255, 255)'
            }
        },
    });

    return (
        <React.Fragment>
            <div className="navigationBar"
            //  style={{position:"sticky",top:"0", zIndex:"+3",width:"100%"}}
            >
                <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU" /><font> Books Villa</font></div>
                <div className='content'>
                    <div className="navtabs">
                        <ul className={`d-${(toggle && (isTabletOrMobileDevice || isTabletOrMobile)) ? "none" : ""}`}>
                            <Link className="Link" to='/'>Home Page</Link>
                            <Link className="Link">Category</Link>
                            <Link className="Link">Profile</Link>
                            <Link className="Link">About Us</Link>
                            {
                                (authToken) ?
                                    <button onClick={logout}>
                                        Log out
                        </button>
                                    :
                                    <Link className="Link" to="/login">Login</Link>
                            }
                            {
                                (authToken) ?
                                    null
                                    :
                                    <Link className="Link" to="/signup">Sign Up</Link>
                            }
                        </ul>
                    </div>
                </div>
                <div className="cart" onClick={toggleHidden}>
                    {/* //cart Icon */}
                    <ThemeProvider theme={theme}>
                    <Badge  badgeContent={99} {...defaultProps} />
                    </ThemeProvider>
                    {/* <span className="itemCount">{itemCount}</span> */}
                </div>
                {
                    hidden === false ?
                        <Cart /> : ""
                }
                <div className="slider"
                    onClick={() => {
                        setHideNav(!hideNav)
                        setToggle(!toggle)
                    }}
                >
                    <i class="fa fa-bars"></i>
                </div>
            </div>

        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleHidden: () => { dispatch(toggleHidden()) },
        setAuthToken: (item) => { dispatch(setAuthToken(item)) }
    }
}

const mapStateToProps = state => {
    return {
        hidden: state.cart.hidden,
        itemCount: state.cart.cartItems.reduce((totalItem, cartItem) => {
            return totalItem + cartItem.quantity
        }, 0),
        authToken: state.login.authToken
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)