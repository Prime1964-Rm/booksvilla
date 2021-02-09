import Carousel from 'react-bootstrap/Carousel'
import React from 'react';


export default function SaleCarousel(){
return(
    
<Carousel className="book-carousel" >
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src='https://i0.wp.com/pointwhiskeypublishing.com/wp-content/uploads/2017/12/point-whiskey-books-banner.jpg?ssl=1'

      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3> */}
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className='d-block'
      src='http://www.pumpupyourbook.com/wp-content/uploads/2018/04/The-Chronicles-of-Eledon-Series-Banner.jpg'
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src='https://i0.wp.com/bookcoverscre8tive.com/wp-content/uploads/2012/09/natures-destiny-series-banner-design.jpg?fit=900%2C332&ssl=1'
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)}