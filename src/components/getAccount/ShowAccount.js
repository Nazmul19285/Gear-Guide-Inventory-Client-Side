import React from 'react';

const ShowAccount = (props) => {
    const {sell, product} = props.ac;
    return (
        <div className='bg-blue-600'>
            <h1>Total Sell: {sell}</h1>
            <h1>We Delivered {product} Product</h1>
        </div>
    );
};

export default ShowAccount;