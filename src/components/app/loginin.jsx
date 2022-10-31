import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/loginin.scss';
function LoginIn() {
    return (
        <>
            <div className="main">
                <div className="creat">
                    <div className="loginin">
                        <h1>Login <b>In.</b></h1>
                    </div>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <Stack spacing={2} direction="row" className='btn'>
                        <Link to='/' ><Button variant="outlined">Back</Button></Link>
                        <Link><Button variant="outlined">Submit</Button></Link>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default LoginIn;