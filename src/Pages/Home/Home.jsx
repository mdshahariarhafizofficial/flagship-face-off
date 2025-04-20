import React from 'react';
import Hero from '../../Components/Hero/Hero';
import PhonesContainer from '../../Components/Mobiles/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const phones = useLoaderData();
  
    return (
        <>
          <Hero></Hero>
          <PhonesContainer phones= {phones}></PhonesContainer>
        </>
    );
};

export default Home;