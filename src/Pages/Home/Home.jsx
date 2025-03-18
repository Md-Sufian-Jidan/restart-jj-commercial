import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Estates from '../../Components/Estates/Estates';
import Faq from '../../Components/Faq/Faq';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Banner />
            <Estates />
            <Faq />
        </div>
    );
};

export default Home;