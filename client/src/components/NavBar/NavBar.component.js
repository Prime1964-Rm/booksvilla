import React, { Component, useEffect, useState } from 'react'
import './navbar-styles.scss'
import CartLogo  from '../../assets/Logos/fastcart.png'
import {toggleHidden} from '../../redux/cart/cartActions'
import {connect} from 'react-redux'
import cartReducer from '../../redux/cart/cartReducer'
import { Cart } from '../Cart'
import {Link} from 'react-router-dom'

const NavBar = ({itemCount,toggleHidden,hidden})=>{    

    const [hideNav,setHideNav] = useState(false)

    return(
        <React.Fragment>
        <div className="navigationBar"
        //  style={{position:"sticky",top:"0", zIndex:"+3",width:"100%"}}
         >
            <div className="logo"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU"/><font> Books Villa</font></div>
            <div className='content'>
                <ul hidden={hideNav}>
                    <Link className="Link" to='/'>Home Page</Link>
                    <Link className="Link">Category</Link>
                    <Link className="Link">Profile</Link>
                    <Link className="Link">About Us</Link>
                    <Link className="Link" to="/login">Login</Link>
                    <Link className="Link" to="/signup">Sign Up</Link>
                </ul>
                <div className="cart" onClick={toggleHidden}>
                    <img src={CartLogo}/>
                    <span className="itemCount">{itemCount}</span>
                </div>
               
            </div>
            {
                 hidden===false?
                 <Cart/> : ""
             }
             <div className="slider" 
             onClick={()=>{
                 setHideNav(!hideNav)
             }}
             >
             <i class="fa fa-bars"></i>
             </div>
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