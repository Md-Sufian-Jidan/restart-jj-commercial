import React from 'react';
import Estates from '../../Components/Estates/Estates';
import Faq from '../../Components/Faq/Faq';
import Banner from '../../Components/Banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='space-y-5'>
            <Helmet>
                <title>Jj Commercial || Home</title>
            </Helmet>
            <Banner />
            <Estates />
            <Faq />
        </div>
    );
};

export default Home;