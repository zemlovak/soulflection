import React from 'react'
import { Link } from 'react-router';

const SignUpError = () => {
    return (
    <>
        <h2>Error 401</h2>
        <h4>Something went wrong, plese try again later.</h4>
        <Link to='/home'><button>RETURN TO HOMEPAGE</button></Link>
    </>
    );
}
 
export default SignUpError;