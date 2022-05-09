import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleLogin = async (event) =>{
        event.preventDefault();
        await signInWithEmailAndPassword(email,password);
    }

    if(loading || loadingGoogle || loadingFacebook){
        return <h1>Loading...</h1>
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
    }
    if (errorGoogle || errorFacebook) {
        return (
          <div>
            <p>Error: {errorGoogle.message}</p>
          </div>
        );
    }
    if(user || userGoogle || userFacebook){
        navigate(from, { replace: true });
    }

    return (
        <div className='lg:w-1/2 lg:mx-auto border my-4 py-4'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl lg:text-5xl mt-8'>Please login</h1>
                <p className='text-md lg:text-xl mt-2'>New member? <button className='text-blue-600'><Link to={'/register'}>Register here.</Link></button></p>
            </div>
            <div className='lg:flex lg:justify-between mx-2 lg:px-6'>
                <div>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input onChange={handleEmail} className='w-96 border py-2 px-4 mt-8' type="email" name="email" autoComplete='email' placeholder='Enter Your Email' required />
                        </div>
                        <div>
                            <input onChange={handlePassword} className='w-96 border py-2 px-4 mt-4' type="password" name="password" autoComplete='current-password' placeholder='Enter Your Password' required />
                        </div>
                        <div className='mt-2 text-right'>
                            <Link className='text-md text-blue-600' to={'/forgetpassword'}>Forgot Password?</Link>
                        </div>
                        <button className='bg-orange-400 text-xl text-white my-4 w-96 py-2 hover:text-black'>Login</button>
                    </form>
                </div>
                <div className='mt-6'>
                    <p className='text-md text-gray-600 mb-2'>Login with</p>
                    <div>
                        <button onClick={() => signInWithGoogle()} className='bg-green-500 text-white text-xl text-white w-96 py-2 mb-4 hover:text-black'>Google</button>
                    </div>
                    <div>
                        <button onClick={() => signInWithFacebook()} className='bg-purple-500 text-white text-xl text-white w-96 py-2 hover:text-black'>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;