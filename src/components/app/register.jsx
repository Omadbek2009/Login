import '../styles/register.scss';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
function Register() {
    return (
        <>
            <div className="home">
                <div className="login">
                    <div className="inp">
                        <div className="h1"><Fade top><h1>Regis<b>ter.</b></h1></Fade></div>
                        <Fade left><input type="text" placeholder='LastName' /></Fade>
                        <Fade right><input type="text" placeholder='FirstName' /></Fade>
                        <Fade left><input type="email" placeholder='Email' /></Fade>
                        <Fade right><input type="password" placeholder='Password' /></Fade>
                        <Stack spacing={2} direction="row">
                                <Fade left><Link to="login"><Button variant="outlined">Login In</Button></Link></Fade>
                                <Fade right><Link><Button variant="outlined">Submit</Button></Link></Fade>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;