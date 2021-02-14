import React, { useEffect } from 'react';
import './product-page.scss';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../../../components/ProductSwiper/swiper.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import BSButton from '../../../components/BSButton/BSButton';
import NavBarComponent from '../../../components/NavBar/NavBar.component';
import { useHistory } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const ProductPage = ({ location }) => {
	let history = useHistory()
	const { Author, category, id, price, src, title } = location.state

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		console.log(location)
		scrollToTop()
	}, [])

	return (
		<React.Fragment>
			<NavBarComponent />
			<div className="container product-main-container mt-5">
				<div className="product-main card">
					<div className="product-image">
						<div id="main-img">
							<img src={src} style={{ width: "40%", height: "80%" }} />
						</div>
						<div id="preview-imgs">
							<Swiper className='preview-img-swiper'
								spaceBetween={50}
								slidesPerView="auto"
								style={{
									// display:"flex",
									// justifyContent:'space-around'
									padding: "5px 0px"
								}}
								navigation
								// pagination={{ clickable: true }}
								// scrollbar={{ draggable: true }}
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
								onReachEnd={() => { console.log('reached end') }}
							>
								{/* {
                               (location)?props.productDetail.imageList.map((img, idx) => {
                                    return <SwiperSlide style={{ width: "20%", marginRight: "50px" }} id={idx} >
                                        <img className="preview-images" src={img.img} />
                                    </SwiperSlide>
                                }):
                                <div>Nothing Found</div>
                            } */}
							</Swiper>
						</div>
					</div>
					<div className="product-details">
						<div className="mt-5">
							<h3>{title}</h3>
							<div className="ratingStars">rating</div>
							<font>{Author}</font>
							<font>Description</font>
							<font>${price}</font>
							<span>
								<BSButton style={{ width: "80%" }} className="mb-2" backgroundColor="white" color="#f44336" border="#f44336">Add to Cart</BSButton>
								<BSButton style={{ width: "80%" }} backgroundColor="white" color="#ff6d00" border='#ff6d00'>Buy Now</BSButton>
							</span>
							<span className="mt-5">
								<BSButton
									onClick={() => {
										history.push({
											pathname: "/pdf"
										})
									}}
									backgroundColor="white" color="#3f51b5" border="#3f51b5" style={{ width: "80%" }}>
									Preview
                        </BSButton>
							</span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
};

export default ProductPage;