import React from 'react';
import { Box, Typography, Button, Container, TextField, Rating } from '@mui/material';
import { useHistory } from 'react-router-dom';

const RateTrip = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Оцените поездку</Typography>
                <Box sx={{ width: '100%', marginTop: 2, padding: 2, backgroundColor: '#f0f0f0', borderRadius: 1 }}>
                    <Typography variant="h6">Охотный ряд - Лубянка</Typography>
                    <Typography variant="body1">Вас сопровождал Иван Иванов</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <Rating name="rating" value={4} />
                    </Box>
                    <TextField
                        label="Комментарии"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        sx={{ marginTop: 2 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button variant="contained" color="primary">Оставить отзыв</Button>
                        <Button variant="contained" color="secondary">Закрыть</Button>
                    </Box>
                </Box>
                <Button variant="contained" color="primary" onClick={() => history.push('/map')} sx={{ marginTop: 2 }}>
                    Назад к карте
                </Button>
            </Box>
        </Container>
    );
};

export default RateTrip;
