import React from 'react';
import Etution from '../../assets/Etutionn.jpg';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex items-end'>
                <img src={Etution} alt="" className='w-30 h-20 object-contain rounded-full  
    bg-[#162447]/10 
    p-1.5 
    shadow-md 
    shadow-[#6C5CE7]/30'  />
                <h3 className="text-3xl font-bold -ms-2.5"></h3>
            </div>
        </Link>
    );
}

export default Logo;