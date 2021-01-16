import React, { Component } from 'react'
import './navbar-styles.css'
import CartLogo  from '../../assets/Logos/cart.svg'

const NavBar = ()=>{
    return(
        <div className="navbar" style={{position:"sticky",top:"0", zIndex:"+3"}}>
            <div className="logo"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU"/><font> Books Villa</font></div>
            <div className='content'>
                <ul>
                    <li>Category</li>
                    <li>Profile</li>
                    <li>About Us</li>
                    <li>Sign Up</li>
                </ul>
                <div className="cart"><img src={CartLogo}/></div>
            </div>
        </div>
    )
}

export default NavBar