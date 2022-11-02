import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/loginin.scss';
import { Fade } from 'react-reveal';
function LoginIn() {
    return (
        <>
            <div className="main">
                <div className="creat">
                    <div className="loginin"><Fade top><h1>Login <b>In.</b></h1></Fade></div>
                    <Fade left><input type="email" placeholder='Email' /></Fade>
                    <Fade right><input type="password" placeholder='Password' /></Fade>
                    <Stack spacing={2} direction="row" className='btn'>
                        <Fade left><Link to='/' ><Button variant="outlined">Back</Button></Link></Fade>
                        <Fade right><Link to='api'><Button variant="outlined">Submit</Button></Link></Fade>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default LoginIn;