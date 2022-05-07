import React from 'react';

const AddItem = () => {
    const addItem = (e) => {
        e.preventDefault();
        const data = {
            name:`${e.target[0].value}`,
            image:`${e.target[1].value}`,
            description:`${e.target[2].value}`,
            supplier:`${e.target[3].value}`,
            category:`${e.target[4].value}`,
            price:`${e.target[5].value}`,
            quantity:`${e.target[6].value}`
        }
        console.log(data);
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[4].value = "";
        e.target[5].value = "";
        e.target[6].value = "";
    }
    return (
        <div className='mt-4'>
            <h1 className='text-center text-3xl font-bold mb-6'>Product Details</h1>
            <form onSubmit={addItem} className='lg:w-1/2 lg:mx-auto mx-4 text-lg'>
                <input className='w-full border p-2 mb-2' type="text" placeholder='Name'  required/>
                <input className='w-full border p-2 mb-2' type="text" placeholder='Image URL' required/>
                <textarea className='w-full border p-2 mb-2' placeholder='Description' required></textarea>
                <input className='w-full border p-2 mb-2' type="text" placeholder='Supplier' required/>
                {/* <div className='w-full border p-2 mb-2 flex justify-between'>
                    <h3>Select Category</h3>
                    <select className='w-1/2 text-center' name="category" required>
                        <option value=""></option>
                        <option value="car">car</option>
                    </select>
                </div> */}
                <input className='w-full border p-2 mb-2' type="text" placeholder='Category' required/>
                <input className='w-full border p-2 mb-2' type="number" placeholder='Price' required/>
                <input className='w-full border p-2 mb-2' type="number" placeholder='Quantity' required/>
                <button className='bg-orange-400 px-10 rounded py-2 hover:text-white' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddItem;