import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import MyImages from "./img";

const SearchOrder = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Button variant="contained" color="primary" onClick={() => history.push('/map')} sx={{ marginTop: 2 }}>
                Назад к карте
            </Button>
            <MyImages/>
        </Container>
    );
};

export default SearchOrder;
