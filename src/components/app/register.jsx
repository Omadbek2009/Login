import '../styles/register.scss';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <>
            <div className="home">
                <div className="login">
                    <div className="inp">
                        <div className="h1"><h1>Regis<b>ter.</b></h1></div>
                        <input type="text" placeholder='LastName' />
                        <input type="text" placeholder='FirstName' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <Stack spacing={2} direction="row">
                            <Link to="login"><Button variant="outlined">Login In</Button></Link>
                            <Link><Button variant="outlined">Submit</Button></Link>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;