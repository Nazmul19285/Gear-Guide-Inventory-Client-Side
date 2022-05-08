import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url =`http://localhost:5000/items/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    },[id])

    const handleItemName = (e) => {
        setItem({name: e.target.value,image: item.image,description: item.description,supplier: item.supplier,category: item.category,price: item.price,quantity: item.quantity});
    }
    const handleItemImage = (e) => {
        setItem({name: item.name,image: e.target.value,description: item.description,supplier: item.supplier,category: item.category,price: item.price,quantity: item.quantity});
    }
    const handleItemDescription = (e) => {
        setItem({name: item.name,image: item.image,description: e.target.value,supplier: item.supplier,category: item.category,price: item.price,quantity: item.quantity});
    }
    const handleItemSupplier = (e) => {
        setItem({name: item.name,image: item.image,description: item.description,supplier: e.target.value,category: item.category,price: item.price,quantity: item.quantity});
    }
    const handleItemCategory = (e) => {
        setItem({name: item.name,image: item.image,description: item.description,supplier: item.supplier,category: e.target.value,price: item.price,quantity: item.quantity});
    }
    const handleItemPrice = (e) => {
        setItem({name: item.name,image: item.image,description: item.description,supplier: item.supplier,category: item.category,price: e.target.value,quantity: item.quantity});
    }
    const handleItemQuantity = (e) => {
        setItem({name: item.name,image: item.image,description: item.description,supplier: item.supplier,category: item.category,price: item.price,quantity: e.target.value});
    }

    console.log(item);

    const handleUpdateItem = (e) => {
        e.preventDefault();
        const url =`http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        });
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='mt-4'>
            <h1 className='text-center text-3xl font-bold mb-6'>Update Product Details</h1>
            <form onSubmit={handleUpdateItem} className='lg:w-1/2 lg:mx-auto mx-4 text-lg'>
                <input onChange={handleItemName} className='w-full border p-2 mb-2' value={item.name} type="text" placeholder='Name'/>
                <input onChange={handleItemImage} className='w-full border p-2 mb-2' value={item.image} type="text" placeholder='Image URL'/>
                <textarea onChange={handleItemDescription} className='w-full border p-2 mb-2' value={item.description} placeholder='Description'></textarea>
                <input onChange={handleItemSupplier} className='w-full border p-2 mb-2' value={item.supplier} type="text" placeholder='Supplier'/>
                {/* <div className='w-full border p-2 mb-2 flex justify-between'>
                    <h3>Select Category</h3>
                    <select className='w-1/2 text-center' name="category" required>
                        <option value=""></option>
                        <option value="car">car</option>
                    </select>
                </div> */}
                <input onChange={handleItemCategory} className='w-full border p-2 mb-2' value={item.category} type="text" placeholder='Category'/>
                <input onChange={handleItemPrice} className='w-full border p-2 mb-2' value={item.price} type="number" placeholder='Price'/>
                <input onChange={handleItemQuantity} className='w-full border p-2 mb-2' value={item.quantity} type="number" placeholder='Quantity'/>
                <button className='bg-orange-400 px-10 rounded py-2 hover:text-white' type='submit'>Update</button>
            </form>
        </div>
    );
};

export default UpdateItem;