import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    const navigateToLogin = () =>{
        navigate('/login');
    }
    return (
        <div className='lg:w-1/2 mx-auto border my-4 py-4'>
            <h1 className='text-center text-4xl lg:text-5xl mt-8'>Reset Password</h1>
            <div className='flex justify-center mt-8'>
                <div>
                    <div>
                        <input className='border-2 p-2 mb-2 w-96' placeholder='Enter your Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <button className='bg-orange-400 text-white text-xl my-4 w-96 w-64 py-2 hover:text-black' onClick={async () => { await sendPasswordResetEmail(email);
                        alert('Please, Check Your Email');
                        navigateToLogin();
                        }}> Reset password </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;