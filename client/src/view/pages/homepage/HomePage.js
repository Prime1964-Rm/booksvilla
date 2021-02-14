import React, { useEffect, useState } from 'react';
import SaleCarousel from '../../../components/SaleCarousel';
import BookCard from '../../../components/BookCard/BookCard'
import './homepage.styles.css'
import RoundNavButton from '../../../components/roundNavButton/RoundNavButton';
import BookCardGroup from '../../../components/BookCardGroup/BookCardGroup';
import ProductSwiper from '../../../components/ProductSwiper/ProductSwiper'
import { connect } from 'react-redux'
import Footer from '../../../components/Footer/Footer';
import NavBarComponent from '../../../components/NavBar/NavBar.component';
import Banner from '../../../assets/banners/booksvilla-highend2.png'
// import {useSelector,useDispatch} from 'react-redux'


function HomePage({ bookList, StoryBooks, Manga,authToken }) {
    console.log("authToken on HomePage",authToken)
    
    return (
        <React.Fragment>
            <NavBarComponent />
            <div className=" homepage" style={{width:"100%"}}>
                <div className="carousel-container">
                    <SaleCarousel />
                </div>
                <div className="container"> 
                <h4 className='list-title mt-5'> Programming & Development</h4>
                </div >
                <ProductSwiper dataList={bookList} />
                <div className="container">
                <h4 className='list-title mt-5'>StoryBooks</h4>
                </div>
                <ProductSwiper dataList={StoryBooks} />
                {/* <div className="container">
                    <img style={{
                        width:"50%",
                        height:"25%"
                    }} src={Banner} />
                </div> */}
                <div className="container">
                <h4 className='list-title mt-5'>Manga</h4>
                </div>
                <ProductSwiper dataList={Manga} />
            </div>
        </React.Fragment>


    )


}

const mapStateToProps = state => {
    return {
        bookList: state.book.bookList.filter(book => {
            return book.category === 'Programming'
        }),

        StoryBooks: state.book.bookList.filter(book => {
            return book.category === 'StoryBook'
        }),
        Manga: state.book.bookList.filter(book => {
            return book.category === 'Manga'
        }),

        authToken: state.login.authToken
    }
}


export default connect(mapStateToProps)(HomePage)