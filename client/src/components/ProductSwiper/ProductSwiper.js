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



const ProductSwiper = ({dataList}) => {
    return (
        <div className="container">
            <Swiper  className='book-swiper d-flex justify-content-space-around'
                slidesPerView='3'
                spaceBetween={50} 
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                onReachEnd={()=>{console.log('reached end')}}
            >
                {
                    dataList.map((item)=>{
                        return <SwiperSlide  key={item.id}  ><BookCard key={item.id} item={item}/></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProductSwiper