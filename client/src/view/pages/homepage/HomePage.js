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
// import {useSelector,useDispatch} from 'react-redux'


function HomePage({ bookList, StoryBooks, Manga }) {
    return (
        <React.Fragment>
            <NavBarComponent/>
            <div className="container homepage">
                <div className="container">
                    <SaleCarousel />
                </div>
                <h4 className='list-title mt-5'>Programming & Development</h4>
                <ProductSwiper dataList={bookList} />

                <h4 className='list-title mt-2'>StoryBooks</h4>
                <ProductSwiper dataList={StoryBooks} />

                <h4 className='list-title mt-2'>Manga</h4>
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
        })
    }
}


export default connect(mapStateToProps)(HomePage)