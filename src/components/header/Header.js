import React, { useState } from 'react';
import CustomLink from '../customLink/CustomLink';
import logo from '../../images/logo.png'
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className='bg-orange-400'>
            <div className='flex justify-between items-center sticky top-0 z-50 py-4 w-11/12 mx-auto'>
                <img src={logo} alt="" srcset="" />
                <div>
                    <div className='w-6 h-6 lg:hidden' onClick={() => setOpen(!open)}>
                        <MenuIcon></MenuIcon>
                    </div>
                    <ul className={`lg:flex ${open ? 'top-16 absolute right-0 bg-gray-50 p-4' : 'hidden'}`}>
                        <li className='lg:mr-8 font-medium'><CustomLink to="/">Home</CustomLink></li>
                        <li className='lg:mr-8 font-medium'><CustomLink to="/inventory" >Inventory</CustomLink></li>
                        <li className='lg:mr-8 font-medium'><CustomLink to="/blogs">Blogs</CustomLink></li>
                        <li className='lg:mr-8 font-medium'><CustomLink to="/login">Login</CustomLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;