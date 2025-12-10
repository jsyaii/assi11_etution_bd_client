import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import bannerImg1 from '../../assets/banner/banner1.jpg'
// import bannerImg2 from '../../assets/banner/banner2.jpg'
// import bannerImg3 from '../../assets/banner/banner3.jpg'
import bannerImg1 from '../../../assets/banner/banner1.jpg';
import bannerImg2 from '../../../assets/banner/banner2.jpg';
import bannerImg3 from '../../../assets/banner/banner3.jpg';
import { Carousel } from 'react-responsive-carousel';

// import bannerImg1 from '../../../assets/banner/banner1.png';
// import bannerImg2 from '../../../assets/banner/banner2.png';
// import bannerImg3 from '../../../assets/banner/banner3.png';

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
           className='w-full mx-auto mb-12 rounded-2xl shadow-lg'
        >
             {/* className='w-full h-[200px] object-cover rounded-2xl shadow-lg' */}
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
// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import bannerImg1 from '../../../assets/banner/banner1.jpg';
// import bannerImg2 from '../../../assets/banner/banner2.jpg';
// import bannerImg3 from '../../../assets/banner/banner3.jpg';
// // import bannerImg1 from '../../assets/banner/banner1.png';
// // import bannerImg2 from '../../assets/banner/banner2.png';
// // import bannerImg3 from '../../assets/banner/banner3.png';
// import { Carousel } from 'react-responsive-carousel';

// const Banner = () => {
//     return (
//         <Carousel
//             autoPlay
//             infiniteLoop
//             showThumbs={false}
//             showStatus={false}
//             interval={4000}
//             transitionTime={800}
//             swipeable
//             emulateTouch
//             dynamicHeight={false}
//         >
//             {[bannerImg1, bannerImg2, bannerImg3].map((img, index) => (
//                 <div key={index} className="relative">
//                     <img
//                         src={img}
//                         alt={`Banner ${index + 1}`}
//                         className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
//                     />
//                     {/* Overlay for premium feel */}
//                     <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 rounded-2xl flex flex-col justify-center items-center text-center text-white px-4">
//                         <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
//                             Welcome to eTuitionBD
//                         </h2>
//                         <p className="text-lg md:text-2xl drop-shadow-md">
//                             Learn, Grow, and Achieve Your Dreams
//                         </p>
//                         <button className="mt-4 px-6 py-2 bg-[#1E3A8A] hover:bg-[#162447] rounded-full font-semibold shadow-md transition-all">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </Carousel>
//     );
// };

// export default Banner;
