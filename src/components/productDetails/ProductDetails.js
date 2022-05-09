import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const id = useParams();
    const [item, setItem] = useState({});
    const navigate =useNavigate();
    let desArray = [];

    useEffect(() => {
        const url = `https://infinite-reaches-79357.herokuapp.com/items/${id.id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    },[id.id])
    let descriptions = item.description;

    if(descriptions){
        desArray = descriptions.split('*');
    }

    const deleteItem = (id) => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://infinite-reaches-79357.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                navigate('/inventory');
            })
        }
    }

    const navigateToUpdate = (id) => {
        navigate(`/update/${id}`);
    }

    return (
        <div className='lg:w-1/2 lg:mx-auto px-4 border'>
            <div>
                <div className='lg:flex mt-4'>
                    <img className='lg:w-1/2' src={item.image} alt="" />
                    <div>
                        <h1 className='text-2xl lg:text-3xl font-bold mt-2 mb-4'>{item.name}</h1>
                        <p className='text-lg lg:text-xl mb-2'>Category: {item.category}</p>
                        <p className='text-lg lg:text-xl mb-2'>Supplier: {item.supplier}</p>
                        <p className='text-lg lg:text-xl mb-2'>Price: {item.price} BDT</p>
                        <p className='text-xl lg:text-2xl mb-4 font-bold'>Quantity: {item.quantity}</p>
                    </div>
                </div>
                <div className='mt-4 border-t pt-4'>
                    {
                        desArray.map(des => <p key={des} className='mb-2'><FontAwesomeIcon icon={faCircleArrowRight} /> {des}</p>)
                    }
                    <div className='flex justify-between my-6 '>
                        <button onClick={() => navigateToUpdate(item._id)} className='bg-orange-400 py-2 px-8 rounded text-white hover:text-black'>Update</button>
                        <button onClick={() => deleteItem(item._id)} className='bg-orange-400 py-2 px-8 rounded text-white hover:text-black'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;