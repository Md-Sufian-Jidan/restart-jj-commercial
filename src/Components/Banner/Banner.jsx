import React from 'react';
import Slider from '../Slider/Slider';

const Banner = () => {
    return (
        <div className="my-5">
            <div className=" p-10 bg-slate-300 rounded-xl mx-3 my-5">
                <h2 className="text-3xl text-center my-5 mx-10">Discover Your Dream Home with <span className='text-[#5D5FEF]'>Jj Commercial.</span> Your Premier Destination for Residential Properties</h2>
                <p className='font-semibold text-center text-2xl my-5 mx-10'>Welcome to Jj Commercial, your ultimate destination for finding the perfect residential property. Whether you are seeking a cozy apartment, a spacious family house, or a luxurious estate, we have a wide range of options to fulfill your dreams of home ownership. Explore our curated listings and embark on the journey to finding your ideal home today!</p>
            </div>
            <Slider />
        </div>
    );
};

export default Banner;