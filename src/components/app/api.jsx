import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/api.scss';
export default function MediaCard() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4900/').then(e => console.log(setState(e.data)), [])
  }, [])
  return (
    <>
      <div className="main">
        <div className='home'>
          {
            state.map(e => {
              return (
                <div className="cards">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={e.image}
                      alt=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>Name: {e.name}</h4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Surname: {e.surname}</h2>
                        <p>Phone: {e.phone}</p>
                        <p>Email: {e.email}</p>
                        <p>Id: {e.id}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}
