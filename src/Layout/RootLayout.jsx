import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='bg-[#0B1026]'>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
      
           </div>
           
    );
};

export default RootLayout;