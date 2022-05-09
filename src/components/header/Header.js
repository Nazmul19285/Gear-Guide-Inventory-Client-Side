import React, { useState } from 'react';
import CustomLink from '../customLink/CustomLink';
import logo from '../../images/logo.png'
import { MenuIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [open,setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div className='bg-orange-400 py-4 sticky top-0 z-50'>
            <div className='flex justify-between items-center sticky top-0 z-50 py-4 w-11/12 mx-auto'>
                <div>
                    <a href="/home">
                        <img src={logo} alt="" srcset="" />
                    </a>
                </div>
                <div>
                    <div className='w-6 h-6 lg:hidden' onClick={() => setOpen(!open)}>
                        <MenuIcon></MenuIcon>
                    </div>
                    <ul className={`lg:flex ${open ? 'top-16 absolute right-0 bg-gray-50 p-4' : 'hidden'}`}>
                        <li className='lg:mr-8 text-lg font-medium'><CustomLink to="/">Home</CustomLink></li>
                        <li className='lg:mr-8 text-lg font-medium'><CustomLink to="/inventory" >Inventory</CustomLink></li>
                        <li className='lg:mr-8 text-lg font-medium'><CustomLink to="/blogs">Blogs</CustomLink></li>
                        <li className='lg:mr-8 text-lg font-medium'><CustomLink to="/about" >About</CustomLink></li>
                        <li className='lg:mr-8 text-lg font-medium'>{
                            user ? 
                                <button onClick={handleLogout}>Logout</button>
                            :
                            <CustomLink to={'/login'}>Login</CustomLink>
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;