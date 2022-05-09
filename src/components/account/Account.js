import React from 'react';
import useAccount from '../../hooks/useAccount';
import ShowAccount from '../getAccount/ShowAccount';

const Account = () => {
    const [account] = useAccount();
    return (
        <div className=''>
            {
                account.map(ac => <ShowAccount key={ac._id} ac={ac}></ShowAccount>)
            }
        </div>
    );
};

export default Account;