import React from 'react'
import SwiperCore, {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './swiper.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import BookCard from '../BookCard/BookCard';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]);

// const bookList = [
//     {
//         title: 'CUDA',
//         id: 1,
//         src: "https://www.pearson.com.au/MC_images/_amazon/9780134177410.jpg",
//         description: "CUDA book for engineers",
//         price: 250
//     },
//     {
//         title: '7 Easy',
//         id: 2,
//         src: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
//         description: "7 easy steps for book cover design",
//         price: 300
//     },
//     {
//         title: 'Stock Images',
//         id: 3,
//         src: 'https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic.jpg',
//         Author: '',
//         price: 150,
//         category: ''
//     },
//     {
//         title: 'Let us C',
//         id: 4,
//         src: 'https://images-na.ssl-images-amazon.com/images/I/51khzq8EVJL.jpg',
//         Author: '',
//         price: 200,
//         catrgory: 'Programming'
//     },
//     {
//         title: 'React JS',
//         id: 5,
//         src: 'https://images-na.ssl-images-amazon.com/images/I/517oJSt-2vL._SX331_BO1,204,203,200_.jpg',
//         Author: 'Claudia Alves',
//         price: 300,
//         category: 'Front-end-Development'
//     }
// ]



const ProductSwiper = ({dataList}) => {
    return (
        <div className="container">
            <Swiper  className='book-swiper'
                slidesPerView={3}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                onReachEnd={()=>{console.log('reached end')}}
            >
                {
                    dataList.map((item)=>{
                        return <SwiperSlide key={item.id}  ><BookCard key={item.id} title={item.title} src={item.src}/></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProductSwiper