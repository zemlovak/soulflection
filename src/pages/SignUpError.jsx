import React from 'react'
import { Link } from 'react-router';

const SignUpError = () => {

    let codes = Array.from({ length: 30 }, (_, i) => 400 + i);
    codes = [...codes, 431, 451];

    let idx = Math.floor((Math.random() * codes.length + 1))

    return (
    <>
        <h2 className='text-9xl'>Error {codes[idx]}</h2>
        <h4 className='my-6'>Something went wrong, plese try again later.</h4>
        <Link to='/'><button className='cta-btn mt-4'>RETURN TO HOMEPAGE</button></Link>
    </>
    );
}
 
export default SignUpError;