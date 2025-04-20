import React from 'react';
import bannerImg from '../../assets/banner.png';

const Hero = () => {
    return (
        <div>
            <img src={bannerImg} className='w-full mx-auto md:max-w-md' alt="" />
        </div>
    );
};

export default Hero;