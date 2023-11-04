import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvent } from '../../features/eventSlice';
import style from './event.module.css'

const Event = () => {

    const events = useSelector(state => state.eventSlice.events)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvent());
    }, [dispatch])

    return (
        <div className={style.event}>
            {
                events.map(item => {
                    return <>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                    <br/>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.location}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </>
                })
            }
        </div>
    );
};

export default Event;