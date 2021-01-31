import React from 'react'
import BSButton from '../BSButton/BSButton'
import './book-card-style.css'
// import {useDispatch} from 'react-redux'
import cartActionTypes from '../../redux/cart/cartActionType'
import cartReducer from '../../redux/cart/cartReducer'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'

const BookCard=({item,addItem})=>{
    const clickEventHandler = (item) =>{
        addItem(item)
    }
    // console.log(item)
    const {title,src,Author} = item
    return(
       <div className='card book-card'>
           <div
           style={{backgroundImage:`url(${src})`}}
           className="book-img-container"><img src={src}/></div>
           <div className="title"><h4>{title}</h4></div>
           <div className="button-container">
               <BSButton
                clickEventHandler={()=>{clickEventHandler(item)} }
                // onClick={}}
                item={item} >ADD TO CART</BSButton>
           </div>
       </div>
    )
    
}

const mapDispatchToProps = dispatch =>{
    return{
        addItem : item =>{dispatch(addItem(item))}
    }
}

export default connect(null,mapDispatchToProps)(BookCard) 