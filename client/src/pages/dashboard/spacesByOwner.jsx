import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Navbar from '../../component/navbar.jsx';
import TextField from '@mui/material/TextField';
export default function SpaceByOwner() {
  const [spacesByOwner, setSpacesByOwner] = useState([]);
  const [titre, setTitre] = useState('');
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/spaces/getSpacesForUseConnected', {
      headers: {
        'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token').split(' ')[1] : ''
      }
    });

    setSpacesByOwner(response.data.spaces);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      {spacesByOwner.length !== 0 && (
        <>
          <TextField
          style={{ marginTop: '10px', marginLeft: '10px' }} 
            name="titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            id="outlined-basic"
            label="titre"
            variant="outlined"
          />
        </>
      )}
      <Grid style={{ marginTop: '10px', marginLeft: '10px' }} container rowSpacing={4.5} columnSpacing={2.75}>
     
        {spacesByOwner.length === 0 && (
          <>
            <h1> No Spaces Found</h1>
          </>
        )}
        {spacesByOwner.length !== 0 &&
          spacesByOwner
            .filter((row) => {
              // Check if id and titre states are not empty
              if (titre !== '') {
                // Filter rows based on titre only
                return row.titre.toLowerCase().includes(titre.toLowerCase());
              } else {
                // If id and titre are empty, return all rows
                return true;
              }
            })
            .map((el) => (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia component="img" height="140" image={el.imageUrl[0]} alt="green iguana" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {el.titre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {el.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            ))}
      </Grid>
    </>
  );
}
