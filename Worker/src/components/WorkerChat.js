import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Container, TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const WorkerChat = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Чат сотрудников</Typography>
                <List sx={{ width: '100%', flexGrow: 1 }}>
                    <ListItem>
                        <Avatar>А</Avatar>
                        <ListItemText primary="Напарник: Анатолий" secondary="Я устал" />
                    </ListItem>
                    <ListItem>
                        <Avatar>Э</Avatar>
                        <ListItemText primary="Напарник: Эдуард" secondary="+" />
                    </ListItem>
                    {/* Добавьте остальные элементы чата */}
                </List>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <TextField fullWidth placeholder="Сообщение..." />
                    <Button variant="contained" sx={{ marginLeft: 1 }}>Отправить</Button>
                </Box>
                <Button variant="contained" color="primary" onClick={() => history.push('/map')} sx={{ marginTop: 2 }}>
                    Назад к карте
                </Button>
            </Box>
        </Container>
    );
};

export default WorkerChat;
