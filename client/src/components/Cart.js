import React from 'react'
import Card from 'react-bootstrap/Card'
import BSButton from './BSButton/BSButton'
import './cart-styles.css'

export const Cart = () =>{
    return(
        <React.Fragment>
            <Card className="cart-dropdown" style={{position:"absolute"}}>
                <Card.Header>
                    <h6>Cart</h6>
                </Card.Header>
                <Card.Body>
                    <h6>few cart Items</h6>
                    <h6>few cart Items</h6>
                    <h6>few cart Items</h6>
                    <h6>few cart Items</h6>
                </Card.Body>
                <Card.Footer>
                    <BSButton>Go To Checkout</BSButton>    
                </Card.Footer>  
            </Card>
        </React.Fragment>
    )
}