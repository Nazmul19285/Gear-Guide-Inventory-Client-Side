import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleRegistert = async(event) =>{
        event.preventDefault();
        if(email){
           await createUserWithEmailAndPassword(email, password);
        }
    }
    if (error) {
        alert(error.message);
        window.location.reload(false);
    }
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        alert(error);
       
    }
    if(user){
        navigate('/home');
    }
    return (
        <div className='lg:w-1/2 mx-auto border my-4 py-4'>
            <h1 className='text-4xl lg:text-5xl mt-8 text-center mb-8'>Please register</h1>
            <div className='flex justify-center'>
                <form onSubmit={handleRegistert}>
                    <div>
                        <input onChange={handleEmail} className='w-96 border py-2 px-4 mt-8' type="email" name="email" placeholder='Enter Your Email' required />
                    </div>
                    <div>
                        <input onChange={handlePassword} className='w-96 border py-2 px-4 mt-4' type="password" name="password" placeholder='Enter Your Password' required />
                    </div>
                    <button className='bg-orange-400 my-4 w-64 w-96 py-2 text-white hover:text-black'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;