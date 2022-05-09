import { faFilm, faCat, faDove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-900 py-12 mt-20'>
            <div className='flex justify-center items-center'>
                <div className='mr-2'>
                    <a href="https://www.facebook.com/profile.php?id=100009025605636" target="blank">
                        <div className='rounded-full bg-blue-600 hover:bg-blue-400 w-8 flex justify-center cursor-pointer'>
                            <h1 className='text-white font-bold text-lg'>f</h1>
                        </div>
                    </a>
                </div>
                <div className='mr-2'>
                    <a href="https://www.youtube.com/c/MedleyCanva/videos" target="blank">
                        <div className='rounded-full bg-red-500 hover:bg-red-400 w-8 flex justify-center cursor-pointer'>
                            <FontAwesomeIcon className='text-white font-bold text-md py-1.5' icon={faDove}/>
                        </div>
                    </a>
                </div>
                <div className='mr-2'>
                    <a href="https://www.linkedin.com/in/nazmul19285/" target="blank">
                        <div className='rounded-full bg-red-400 w-8 hover:bg-red-300 w-8 flex justify-center cursor-pointer'>
                            <h1 className='text-white font-bold text-lg'>ln</h1>
                        </div>
                    </a>
                </div>
                <div className='mr-2'>
                    <a href="https://www.youtube.com/c/MedleyCanva/videos" target="blank">
                        <div className='rounded-full bg-orange-500 hover:bg-orange-300 w-8 flex justify-center cursor-pointer'>
                            <FontAwesomeIcon className='text-white font-bold text-md py-1.5' icon={faFilm}/>
                        </div>
                    </a>
                </div>
                <div className='mr-2'>
                    <a href="https://github.com/Nazmul19285" target="blank">
                        <div className='rounded-full bg-indigo-500 hover:bg-indigo-300 w-8 flex justify-center cursor-pointer'>
                            <h1 className='text-white text-md py-0.5'>git</h1>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <div>
                    <Link className='text-gray-400 mr-4 lg:mr-8 hover:text-white' to='/about'>About</Link>
                    <Link className='text-gray-400 mr-4 lg:mr-8 hover:text-white' to='/support' onClick={ (event) => event.preventDefault() }>Need help?</Link>
                    <Link className='text-gray-400 mr-4 lg:mr-8 hover:text-white' to='/privacy' onClick={ (event) => event.preventDefault() }>Privacy</Link>
                    <Link className='text-gray-400 mr-4 lg:mr-8 hover:text-white' to='/policy' onClick={ (event) => event.preventDefault() }>Policy</Link>
                    <Link className='text-gray-400 mr-4 lg:mr-8 hover:text-white' to='/jobs' onClick={ (event) => event.preventDefault() }>Jobs</Link>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <p className='text-xs text-white'>© {new Date().getFullYear()} Gear Guide Inc.</p>
            </div>
            
        </div>
    );
};

export default Footer;