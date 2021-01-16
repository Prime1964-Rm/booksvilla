import Carousel from 'react-bootstrap/Carousel'
import React from 'react';


export default function SaleCarousel(){
return(
    
<Carousel className="book-carousel">
  <Carousel.Item interval={2000}>
    <img
      className="d-block"
      src='https://osterhout.info/wp-content/uploads/bfi_thumb/Book-Sale-Banner-8.8.20-ot72vrbls9pj5mv7tlhsd5lesp58h7cp6yekmbjmao.png'
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3> */}
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className='d-block'
      src='https://img.freepik.com/free-vector/book-shop-interior-illustration-various-books-shelves-cashier-desk-indoors-bookstore-with-girl-seller-no-buyers-inside-popular-new-items_109722-486.jpg?size=626&ext=jpg'
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block"
      src='https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/53784/preview_53784.jpg'
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3> */}
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)}