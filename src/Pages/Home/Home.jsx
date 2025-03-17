import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Estates from '../../Components/Estates/Estates';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;