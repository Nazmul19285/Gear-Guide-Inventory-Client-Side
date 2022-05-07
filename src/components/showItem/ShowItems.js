import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowItems = (props) => {
    const { _id, image, name, category, price, quantity, supplier } = props.item;
    const navigate = useNavigate();

    const navigateToDetailsAndUpdate = (_id) => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className='border rounded mb-4 lg:mb-0'>
            <img className='w-full mb-2' src={image} alt="not found" />
            <div className='px-4'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <h4 className='text-lg'>Category: {category}</h4>
                <h3 className='text-lg'>Supplier: {supplier}</h3>
                <p className='text-lg'>Price: {price} BDT</p>
                <h1 className='my-3 text-lg font-bold'>Quantity: {quantity}</h1>
                <div className='flex justify-between mb-4'>
                    <button className='bg-orange-400 py-2 px-6 rounded text-white hover:text-black' onClick={() => navigateToDetailsAndUpdate(_id)}>Details & Update</button>
                    <button className='bg-orange-400 py-2 px-6 rounded text-white hover:text-black'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default ShowItems;