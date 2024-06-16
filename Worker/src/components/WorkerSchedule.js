import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Container, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useHistory } from 'react-router-dom';
import MyImages2 from "./img_schedule";


const WorkerSchedule = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>

                <MyImages2/>
                <Button variant="contained" color="primary" onClick={() => history.push('/map')}>
                    Назад к карте
                </Button>

        </Container>
    );
};

export default WorkerSchedule;
