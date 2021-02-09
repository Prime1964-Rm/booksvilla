import React from 'react'
import BSButton from '../BSButton/BSButton'
import './book-card-style.css'
// import {useDispatch} from 'react-redux'
import cartActionTypes from '../../redux/cart/cartActionType'
import cartReducer from '../../redux/cart/cartReducer'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartActions'
import { useHistory } from 'react-router-dom'

const BookCard=({item,addItem})=>{
    let history= useHistory()
    const clickEventHandler = (item) =>{
        addItem(item)
    }
    // console.log(item)

    const openProduct=(item) =>{
        history.push({
                pathname:'/productdetails',
                state: item
        })
    }

    const {title,src,Author} = item
    return(
       <div onClick={()=>{openProduct(item)}} className='card book-card'>
           <div
           style={{backgroundImage:`url(${src})`}}
           className="book-img-container"><img src={src}/></div>
           <div className="title"><h4>{title}</h4></div>
           <div className="button-container">
               <BSButton
                onClick={()=>{clickEventHandler(item)} }
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