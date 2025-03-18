import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Estates from '../../Components/Estates/Estates';
import Faq from '../../Components/Faq/Faq';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Slider></Slider>
            <Estates></Estates>
            <Faq></Faq>
        </div>
    );
};

export default Home;