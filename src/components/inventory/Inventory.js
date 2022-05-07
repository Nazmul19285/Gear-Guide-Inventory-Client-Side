import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllItems from '../allItems/AllItems';

const Inventory = () => {
    const navigate =useNavigate();
    const navigateToAddItem = () =>{
        navigate('/additem');
    }
    return (
        <div className='w-11/12 mx-auto mt-4'>
            <div className='lg:flex'>
                <div className='lg:w-1/4'>
                    <div className='mb-4'>
                        <h3 className='text-gray-500'>CATEGORIES</h3>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='lg:flex justify-between items-center'>
                        <div className='mb-4 lg:order-2 flex justify-end'>
                            <button onClick={navigateToAddItem} className='bg-orange-400 px-6 py-2 text-white font-bold hover:text-black rounded-full'>Add Item</button>
                        </div>
                        <div className='border border-gray-400 flex justify-between lg:w-2/3 rounded-full mb-4 lg:order-1'>
                            <input className='mx-6 w-full focus:outline-none' type="text" placeholder='Search...' />
                            <button className='bg-orange-400 text-white py-2 px-6 rounded-full m-2 hover:text-black'>SEARCH</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <AllItems></AllItems>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;