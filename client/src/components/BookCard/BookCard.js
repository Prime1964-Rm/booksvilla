import React from 'react'
import BSButton from '../BSButton/BSButton'
import './book-card-style.css'

const BookCard=({title,src})=>{
    console.log(title)
    return(
       <div className='card book-card'>
           <div
           style={{backgroundImage:`url(${src})`}}
           className="book-img-container"><img src={src}/></div>
           <div className="title"><h4>{title}</h4></div>
           <div className="button-container">
               <BSButton/>
           </div>
       </div>
    )
    
}

export default BookCard