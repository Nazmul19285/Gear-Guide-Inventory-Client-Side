import React from 'react';

const Inventory = () => {
    const addItem = () =>{
        
    }
    return (
        <div className='w-11/12 mx-auto mt-4'>
            <div className='lg:flex justify-between items-center '>
                <div className='mb-4 lg:order-3 flex justify-end'>
                    <button onClick={addItem} className='bg-orange-400 px-6 py-2 text-white font-bold hover:text-black rounded-full'>Add Item</button>
                </div>
                <div className='border border-gray-400 flex justify-between rounded-full lg:w-1/2 mb-4 lg:order-2'>
                    <input className='mx-6 w-full focus:outline-none' type="text" placeholder='Search...' />
                    <button className='bg-orange-400 text-white py-2 px-6 rounded-full m-2 hover:text-black'>SEARCH</button>
                </div>
                <div className=''>
                    <h3 className='text-gray-500'>CATEGORIES</h3>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default Inventory;