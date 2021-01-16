import React,{useEffect, useState} from 'react';
import BookCard from '../BookCard/BookCard'

const BookCardGroup = ({bookList}) =>{
    let [endingPoint,setEndingPoint]= useState(3)
    let [startingPoint,setStartingPoint]=useState(0)
    return(
            <div className="container book-list">
                <button className='round-nav-btn' onClick={(e)=>{
                    if(startingPoint>0){
                                    setStartingPoint(--startingPoint)
                                }
                                if(endingPoint>startingPoint+3){
                                    setEndingPoint(--endingPoint)
                                }
                }}>
                 {`<`}   
                </button>
                {
                    bookList.filter((item,idx)=>{
                       return (idx>=startingPoint&&idx<endingPoint)
                    
                    }).map(({id,title,src,Author,price,category})=>{
                        return <BookCard key={id} title={title} src={src} />
                    })
                }
                <button className='round-nav-btn' onClick={(e)=>{
                    if(endingPoint<bookList.length){
                        setEndingPoint(++endingPoint)
                    }
                    if(startingPoint<=endingPoint-4){
                        setStartingPoint(++startingPoint)
                    }
                }}>{`>`}</button>
            </div>
    )
}
export default BookCardGroup