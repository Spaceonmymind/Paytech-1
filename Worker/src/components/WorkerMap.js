import React from 'react';
import { Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import MyImages3 from "./img_mainmap";

function WorkerMap() {
    const history = useHistory();

    return (
        <Box sx={{ height: '100vh', position: 'relative' }}>

            <Box sx={{margin: '20px 30px 50px'}}>
                <Button variant="contained" color="primary" onClick={() => history.push('/schedule')}>
                    Расписание
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/messages')}>
                    Сообщения
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/chat')}>
                    Чат сотрудников
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/dispatcher-chat')}>
                    Диспетчер
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/settings')}>
                    Настройки
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/search-order')}>
                    Поиск заказа
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/current-order')}>
                    Текущий заказ
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/rate-trip')}>
                    Оценка поездки
                </Button>

            </Box>
            <MyImages3/>
            <Button variant="contained" color="primary" sx={{display: 'block', margin: '0 auto'}} onClick={() => history.push('/profile')}>
                Перейти в профиль
            </Button>
        </Box>
    );
}

export default WorkerMap;
