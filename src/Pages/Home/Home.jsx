import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import PhonesContainer from '../../Components/Mobiles/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
  const phonesData = useLoaderData();
  const [phones, setPhones] = useState(phonesData); 
  const handleSearch = (e,text)=>{
    e.preventDefault();
    const searchResult = 
      phones.filter(phone => 
        phone.name.toLowerCase().includes(text.toLowerCase())||
        phone.brand.toLowerCase().includes(text.toLowerCase())
      )
    setPhones(searchResult)
  }
    return (
        <>
          <Hero handleSearch={handleSearch}></Hero>
          <PhonesContainer phones= {phones}></PhonesContainer>
        </>
    );
};

export default Home;