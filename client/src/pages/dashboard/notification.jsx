import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
export default function Notification() {
  const [notificationByOwner, setNotificationByOwner] = useState([]);
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/notifications/allNotification');

    setNotificationByOwner(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const markAsRead = async (id) => {
    try {
      const confirmation = window.confirm('Are you sure you want to mark this notification as read?');
      
      if (confirmation) {
        const response = await axios.put(`http://localhost:5000/notifications/updateNotification/${id}`);
      fetchData()
      } else {
        console.log('Deletion canceled');
      }
      

    } catch (err) {
      console.error(err.message);
    }
  };
  const markAsUnRead = async (id) => {
    try {
      const confirmation = window.confirm('Are you sure you want to mark this notification as unread?');
      
      if (confirmation) {
        const response = await axios.put(`http://localhost:5000/notifications/updateNotificationToUnread/${id}`);
      fetchData()
      } else {
        console.log('Deletion canceled');
      }
      

    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {notificationByOwner.map((el) => (
          <Grid item xs={12} sm={6} md={1} lg={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography 
                  style={{display:'flex',justifyContent:"space-between"}}
                  gutterBottom variant="h5" component="div">
                 

                    {el.type}
                    {el.read && <>
                    <CheckCircleIcon color='success' />
                  </>}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => el.read ? markAsUnRead(el?._id) :  markAsRead(el?._id)} size="small">
                 {el.read ? "Mark as unRead" : "Mark as Read" } 
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
