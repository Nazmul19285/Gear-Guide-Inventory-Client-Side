import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-gray-600 text-center my-8'>B L O G S</h1>
            <div className='lg:w-1/2 lg:mx-auto mx-4'>
                <div className='bg-gray-50 drop-shadow-lg p-4 mb-8'>
                    <h1 className='text-3xl font-bold text-blue-600 mb-4'>1. Difference between Javascript and Node JS</h1>
                    <div>
                        <h2 className='font-bold text-2xl mb-2'>Javascript</h2>
                        <p>Javascript is a programming language that is used for writing scripts on the website. It can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. It can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development. Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that uses Chrome V8 engine written in C++. </p>
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-bold text-2xl mb-2'>NodeJS</h2>
                        <p>NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Nodejs is written in C, C++ and Javascript.</p>
                    </div>
                </div>
                <div className='bg-gray-50 drop-shadow-lg p-4 mb-8'>
                    <h1 className='text-3xl font-bold text-blue-600 mb-4'>2. When should you use NodeJS and when should you use MongoDB?</h1>
                    <div>
                        <h2 className='font-bold text-2xl mb-2'>NodeJS</h2>
                        <p>We should use NodeJS in CRUD Apps. CRUD refers to apps related to either of the four categories (Create, Read, Update, Delete) that feature a relational database. Node.js is also a great choice for constructing an API application with both relational and non-relational databases. Node.js is good at building real-time applications like messaging, notifications delivery, live streaming and collaboration tools.</p>
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-bold text-2xl mb-2'>MongoDB</h2>
                        <p>MongoDB is a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping. MongoDB works well with use cases such as catalogs, user profiles, and content management systems where each document is unique and evolves over time.” Log storage is another good use case.</p>
                    </div>
                </div>
                <div className='bg-gray-50 drop-shadow-lg p-4 mb-8'>
                    <h1 className='text-3xl font-bold text-blue-600 mb-4'>3. Differences between SQL and NoSQL databases.</h1>
                    <div>
                        <h2 className='font-bold text-2xl mb-2'>SQL</h2>
                        <p>SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable and Follows ACID property.</p>
                    </div>
                    <div className='mt-4'>
                        <h2 className='font-bold text-2xl mb-2'>NoSQL</h2>
                        <p>These are Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable and Follows CAP(consistency, availability, partition tolerance).</p>
                    </div>
                </div>
                <div className='bg-gray-50 drop-shadow-lg p-4 mb-8'>
                    <h1 className='text-3xl font-bold text-blue-600 mb-4'>4. What is the purpose of jwt and how does it work?</h1>
                    <div>
                        <p>JWT is a particularly useful technology for API authentication and server-to-server authorization. A JWT is a mechanism to verify the owner of some JSON data.</p>
                    </div>
                    <div className='mt-4'>
                        <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format.<br></br><br></br>

                        Once decoded, we will get two JSON strings:<br></br><br></br>

                        1. The header and the payload.
                        2. The signature. <br></br><br></br>

                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.<br></br><br></br>

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br></br><br></br>

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br></br><br></br>

                        The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;