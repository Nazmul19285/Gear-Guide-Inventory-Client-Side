import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMessage, faMobileAndroid } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm('service_6w3qv0r', 'template_6p8nlub', form.current, 'xSyq3g0uCLRDmbfSB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          toast('Sending...');
          e.target[0].value = "";
          e.target[1].value = "";
          e.target[2].value = "";
      };
    return (
        <div className='bg-gray-200'>
            <ToastContainer></ToastContainer>
            <h1 className='text-gray-600 text-center text-4xl pt-8'>Contact Us</h1>
            <div className='lg:flex lg:justify-between lg:w-1/2 mx-4 lg:mx-auto py-8'>
                <div>
                    <div className='flex items-center text-gray-600'>
                        <FontAwesomeIcon className='font-bold text-4xl py-1.5 mr-6' icon={faLocationDot}/>
                        <h1 className='text-lg'>Akota Tower, Road # 8, Block - A,<br></br>1st Floor, Section - 1, Mirpur, Dhaka-1216</h1>
                    </div>
                    <div className='flex items-center text-gray-600 mt-4'>
                        <FontAwesomeIcon className='font-bold text-4xl py-1.5 mr-6' icon={faMessage}/>
                        <h1 className='text-lg'>nazmulhossain19285@gmail.com</h1>
                    </div>
                    <div className='flex items-center text-gray-600 mt-4'>
                        <FontAwesomeIcon className='font-bold text-4xl py-1.5 mr-6' icon={faMobileAndroid}/>
                        <h1 className='text-lg'>+8801628965394</h1>
                    </div>
                </div>
                <form className='flex flex-col mt-8 lg:mt-0 lg:w-1/3' ref={form} onSubmit={sendEmail}>
                    <input className='border mb-2 px-4 py-2' type="text" name="user_name" placeholder='Your Name' required/>
                    <input className='border mb-2 px-4 py-2' type="email" name="user_email" placeholder='Your Email' required/>
                    <textarea className='border mb-2 px-4 py-2' name="message" placeholder='Message' required/>
                    <input className='bg-orange-400 py-2 cursor-pointer text-md text-white hover:text-black' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;