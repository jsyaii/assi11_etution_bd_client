import React from 'react';
import Banner from '../pages/Home/Banner/Banner';
import Works from '../pages/Home/Works/Works';
import ChooseUs from '../pages/Home/ChooseUs/ChooseUs';
import LatestTutors from '../pages/Home/LatestTutors/LatestTutors';
import LatestTuitions from '../pages/Home/LatestTuitions/LatestTuitions';

const HomeLayouts = () => {
    return (
        <div className="bg-gradient-to-br from-[#F3E8FF] via-[#E0D7FF] to-[#D9B6FF] min-h-screen">
            <Banner></Banner>
            <LatestTutors></LatestTutors>
            <Works></Works>
           <LatestTuitions></LatestTuitions>
            <ChooseUs></ChooseUs>
        </div>
    );
}

export default HomeLayouts;
