import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.jpg';
import bannerImg2 from '../../../assets/banner/banner2.jpg';
import bannerImg3 from '../../../assets/banner/banner3.jpg';
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
           className='w-full mx-auto mb-12 rounded-2xl shadow-lg'
        >
            
            <div>
                <img src={bannerImg1} />
            </div>
            <div>
                <img src={bannerImg2} />
            </div>
            <div>
                <img src={bannerImg3} />
            </div>
        </Carousel>
    
    );
};

export default Banner;
