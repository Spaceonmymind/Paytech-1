import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useHistory } from 'react-router-dom';

const CurrentOrder = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Текущий заказ</Typography>
                <Box sx={{ width: '100%', marginTop: 2, padding: 2, backgroundColor: '#f0f0f0', borderRadius: 1 }}>
                    <Typography variant="h6">Охотный ряд - Лубянка</Typography>
                    <Typography variant="body1">Петрова Мария Ивановна</Typography>
                    <Typography variant="body2">Время в пути: 20 минут</Typography>
                    <Typography variant="body2">Комментарий: Встреча на улице у входа</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button variant="contained" color="primary">Связаться</Button>
                        <Button variant="contained" color="secondary">Финиш</Button>
                    </Box>
                </Box>
                <Button variant="contained" color="primary" onClick={() => history.push('/map')} sx={{ marginTop: 2 }}>
                    Назад к карте
                </Button>
            </Box>
        </Container>
    );
};

export default CurrentOrder;
