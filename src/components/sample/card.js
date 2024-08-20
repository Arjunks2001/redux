import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';



import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CustomCarousel.css';

const CustomCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const items = [
        { id: 1, title: 'Image 1' },
        { id: 2, title: 'Image 2' },
        { id: 3, title: 'Image 3' }
    ];

    return (
        <div className="container-fluid" style={{ backgroundColor: '#14151c', padding: '20px' }}>
            <div className="row">
                <div className="col">
                    <Carousel 
                        responsive={responsive} 
                        infinite 
                        autoPlay 
                        autoPlaySpeed={3000} 
                        arrows
                        customLeftArrow={<i className="carousel-control-prev-icon" style={{ fontSize: '2em', color: '#00ffcc' }} />}
                        customRightArrow={<i className="carousel-control-next-icon" style={{ fontSize: '2em', color: '#00ffcc' }} />}
                    >
                        {items.map(item => (
                            <div key={item.id} className="card custom-card">
                                <div className="card-body custom-content">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;


                          .custom-card {
    background: linear-gradient(145deg, #00ffcc, #009999);
    border-radius: 20px;
    padding: 50px;
    text-align: center;
    margin: 10px;
}

.custom-content {
    color: #ffffff;
    font-size: 1.5em;
}
