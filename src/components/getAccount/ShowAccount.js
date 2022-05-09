import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSackDollar, faTruck } from '@fortawesome/free-solid-svg-icons';

const ShowAccount = (props) => {
    const {sell, product} = props.ac;
    return (
        <div className='bg-indigo-50 mt-8'>
            <div className='lg:flex lg:justify-between text-center lg:w-3/4 lg:mx-auto py-8 mx-4'>
                <div className='lg:w-1/3 mx-auto bg-gray-50 rounded-lg drop-shadow-xl p-12'>
                    <FontAwesomeIcon className='text-6xl mb-8 text-blue-900' icon={faSackDollar}/>
                    <h1 className='text-orange-600 text-5xl font-bold mb-8'>{sell} BDT</h1>
                    <h1 className='text-6xl'>Total Sell</h1>
                </div>
                <div className='lg:w-1/3 mx-auto bg-gray-50 rounded-lg drop-shadow-xl p-12'>
                    <FontAwesomeIcon className='text-6xl mb-8 text-blue-900' icon={faTruck}/>
                    <h1 className='text-orange-600 text-5xl font-bold mb-8'>{product}</h1>
                    <h1 className='text-6xl'>Product Delivered</h1>
                </div>
            </div>
        </div>
    );
};

export default ShowAccount;