

import image1 from "/images/slide/slide-1.jpg";

import image2 from "/images/slide/slide-2.jpg";
import image3 from "/images/slide/slide-3.jpg";
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
    return (
        <Carousel className="carousel-1" >
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image  bg-opacity-10 "
                    src={image3}
                    alt="First slide"
                />
                <Carousel.Caption className=" caption ">
                    <h3 className=" display-2  fw-bolder "> <span style={{ color: '#ffb03b' }} > Delicious</span> Restaurant</h3>
                    <p className=" para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem magnam aut perferendis saepe similique quos reprehenderit dicta temporibus fuga, deleniti officia eum. Earum maxime placeat deserunt expedita doloremque consectetur nemo.</p>
                    <div>
                        <a href="#menu" className="btn-menu ">Our Menu</a>
                        <a href="#book-a-table" className="btn-book ">Book a Table</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image "
                    src={image1}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={image2}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
