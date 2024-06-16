import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Container, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const WorkerMessages = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Сообщения</Typography>
                <List sx={{ width: '100%' }}>
                    <ListItem>
                        <Avatar>А</Avatar>
                        <ListItemText primary="Напарник: Анатолий" secondary="Буду на месте через 5 минут" />
                    </ListItem>
                    <ListItem>
                        <Avatar>К</Avatar>
                        <ListItemText primary="Напарник: Кирилл" secondary="Мы с Николаем тебя ждём у входа" />
                    </ListItem>
                    {/* Добавьте остальные элементы сообщений */}
                </List>
                <Button variant="contained" color="primary" onClick={() => history.push('/map')}>
                    Назад к карте
                </Button>
            </Box>
        </Container>
    );
};

export default WorkerMessages;
