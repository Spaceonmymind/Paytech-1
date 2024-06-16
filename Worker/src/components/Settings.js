import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useHistory } from 'react-router-dom';

const Settings = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SettingsIcon sx={{ fontSize: 100, marginBottom: 2 }} />
                <Typography variant="h5">Настройки</Typography>
                {/* Добавьте элементы настроек */}
                <Button variant="contained" color="primary" onClick={() => history.push('/map')} sx={{ marginTop: 2 }}>
                    Назад к карте
                </Button>
            </Box>
        </Container>
    );
};

export default Settings;
