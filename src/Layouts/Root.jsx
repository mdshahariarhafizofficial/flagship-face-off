import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
            <div className='border-b-2 border-gray-200'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-116px)]'>
                <div className='max-w-[1688px] mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;