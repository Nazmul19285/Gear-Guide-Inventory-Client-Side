import React from 'react';
import mission from '../../images/mission.jpg'
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div>
            <div>
                <div className='lg:w-2/3 lg:mx-auto mx-4 lg:flex py-16'>
                    <div className='lg:w-2/3 flex items-center lg:order-2'>
                        <h1 className='text-center text-lg lg:text-3xl mb-8 font-bold text-gray-900'>Gear Guide inc (GGI) is a place of quality equipment for creative people.</h1>
                    </div>
                    <div className='lg:w-1/2 w-11/12 mt-10 lg:mt-0 lg:order-1'>
                        <img src={about} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-indigo-50'>
                <div className='lg:w-2/3 lg:mx-auto mx-4 lg:flex justify-between py-16'>
                    <div className='lg:w-1/3'>
                        <h1 className='text-4xl text-center mb-8 font-bold text-gray-700'>Our Mission</h1>
                        <p className='text-lg subpixel-antialiased '>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
                    </div>
                    <div className='lg:w-1/2 w-11/12 mt-10 lg:mt-0'>
                        <img className='skew-y-3 skew-x-12 rounded-lg' src={mission} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;