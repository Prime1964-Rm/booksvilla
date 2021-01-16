import React, { useEffect, useState } from 'react';
import SaleCarousel from '../../../components/SaleCarousel';
import BookCard from '../../../components/BookCard/BookCard'
import './homepage.styles.css'
import RoundNavButton from '../../../components/roundNavButton/RoundNavButton';
import BookCardGroup from '../../../components/BookCardGroup/BookCardGroup';
import ProductSwiper from '../../../components/ProductSwiper/ProductSwiper'
import {connect} from 'react-redux'


 function HomePage(props) {
    return (
        <div className="container homepage">

            <div className="container">
                <SaleCarousel />
            </div>
   
         <h4 className='list-title mt-5'>Top Featured</h4>
         <ProductSwiper dataList={props.bookList}/>

         <h4 className='list-title mt-2'>StoryBooks</h4>
         <ProductSwiper dataList={props.StoryBooks}/>   

         <h4 className='list-title mt-2'>Manga</h4>   
         <ProductSwiper dataList={props.Manga}/>   

        </div>

    )

  
}

const mapStateToProps = state =>{
    return {
        bookList: state.bookList,
        StoryBooks: state.Stories,
        Manga : state.Manga
    }
}

export default connect(mapStateToProps,null)(HomePage)