import React from 'react';
import Navbar from '../Components/shared/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/shared/Footer/Footer';

const RootLayouts = () => {
    return (
         <div className='w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default RootLayouts;
