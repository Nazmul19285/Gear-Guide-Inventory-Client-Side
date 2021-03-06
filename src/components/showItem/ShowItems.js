import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ShowItems = (props) => {
    const { _id, image, name, category, price, quantity, supplier } = props.item;
    const [item, setItem] = useState({});
    const [account, setAccount] = useState([]);
    const [handler, setHandler] = useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const navigateToDetailsAndUpdate = (_id) => {
        navigate(`/inventory/${_id}`);
    }

    useEffect(() => {
        const url =`https://infinite-reaches-79357.herokuapp.com/account`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAccount(data));
    },[])

    useEffect(() => {
        const url =`https://infinite-reaches-79357.herokuapp.com/items/${_id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
    },[_id])


    const deliverItem = () => {
        if(user){
            if(quantity > 0){
                setItem({name: item.name,image: item.image,description: item.description,supplier: item.supplier,category: item.category,price: item.price,quantity: item.quantity-1});
                setHandler(!handler);
                handleAccount();
            }
            else{
                alert("Out of Stock!");
            }
        }
        else{
            alert('Please login first');
        }
    }

    // decreasing quantity by updating into database
    const decrease = async() => {
        const url =`https://infinite-reaches-79357.herokuapp.com/items/${_id}`;
        await fetch(url, {
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
    }

    // update account into database
    const updateAccount = async() => {
        const url =`https://infinite-reaches-79357.herokuapp.com/account/${account._id}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(account)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        });
    }



    if(handler){
        decrease();
        setHandler(!handler);
        updateAccount();
        console.log(account);
    }

    const handleAccount = () =>{
        const totalSell = (~~account[0].sell ) + (~~item.price);
        const totalProduct = (~~account[0].product) + 1;
        const accountId = account[0]._id;
        setAccount({_id: accountId, sell: totalSell, product: totalProduct});
    }

    return (
        <div className='border bg-gray-50 hover:drop-shadow-xl rounded mb-4 lg:mb-0 hover:-translate-y-1.5 hover:-translate-x-1.5'>
            <img className='w-full mb-2' src={image} alt="not found" />
            <div className='px-4'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <h4 className='text-lg'>Category: {category}</h4>
                <h3 className='text-lg'>Supplier: {supplier}</h3>
                <p className='text-lg'>Price: {price} BDT</p>
                <h1 className='my-3 text-lg font-bold'>Quantity: {item.quantity}</h1>
                <div className='flex justify-between mb-4'>
                    <button className='bg-orange-400 py-2 px-6 rounded text-white hover:text-black' onClick={() => navigateToDetailsAndUpdate(_id)}>Details & Update</button>
                    <button onClick={deliverItem} className='bg-orange-400 py-2 px-6 rounded text-white hover:text-black'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default ShowItems;