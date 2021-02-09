import React, { Component, useEffect } from 'react'
import './navbar-styles.css'
import CartLogo  from '../../assets/Logos/cart.svg'
import {toggleHidden} from '../../redux/cart/cartActions'
import {connect} from 'react-redux'
import cartReducer from '../../redux/cart/cartReducer'
import { Cart } from '../Cart'
import {Link} from 'react-router-dom'

const NavBar = ({itemCount,toggleHidden,hidden})=>{    
    return(
        <React.Fragment>
        <div className="navbar" style={{position:"sticky",top:"0", zIndex:"+3"}}>
            <div className="logo"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU"/><font> Books Villa</font></div>
            <div className='content'>
                <ul>
                    <Link className="Link" to='/'>Home Page</Link>
                    <Link className="Link">Category</Link>
                    <Link className="Link">Profile</Link>
                    <Link className="Link">About Us</Link>
                    <Link className="Link" to="/login">Login</Link>
                    <Link className="Link" to="/signup">Sign Up</Link>
                    <Link className="Link" to="/pdf">PDF Viewer</Link>
                </ul>
                <div className="cart" onClick={toggleHidden}>
                    <img src={CartLogo}/>
                    <span>{itemCount}</span>
                </div>
            </div>
             {
                 hidden===false?
                 <Cart/> : ""
             }
        </div>
        
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        toggleHidden : ()=>{dispatch(toggleHidden())}
    }
}

const mapStateToProps = state =>{
    return {
        hidden: state.cart.hidden,
        itemCount : state.cart.cartItems.reduce((totalItem,cartItem)=>{
            return totalItem + cartItem.quantity
        },0)
    } 
    
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)