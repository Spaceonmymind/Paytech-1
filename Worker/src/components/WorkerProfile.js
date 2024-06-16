import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Container, Button } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MessageIcon from '@mui/icons-material/Message';
import GroupChatIcon from '@mui/icons-material/Group';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import { useHistory } from 'react-router-dom';


const WorkerProfile = () => {
    const history = useHistory();

    return (
        <Container component="main" sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, marginBottom: 2 }}>ИИ</Avatar>
                <Typography variant="h5">Иванов Иван Иванович</Typography>
                <Typography variant="subtitle1">4.0 Активность</Typography>
                <Typography variant="subtitle1">10 лет Опыт</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    {/* Добавьте здесь иконки навыков */}
                </Box>
                <List sx={{ width: '100%', marginTop: 2 }}>
                    <ListItem button onClick={() => history.push('/schedule')}>
                        <ListItemIcon><ScheduleIcon /></ListItemIcon>
                        <ListItemText primary="Расписание" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/messages')}>
                        <ListItemIcon><MessageIcon /></ListItemIcon>
                        <ListItemText primary="Сообщения" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/chat')}>
                        <ListItemIcon><GroupChatIcon /></ListItemIcon>
                        <ListItemText primary="Чат сотрудников" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/dispatcher-chat')}>
                        <ListItemIcon><SupportAgentIcon /></ListItemIcon>
                        <ListItemText primary="Диспетчер" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/settings')}>
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Настройки" />
                    </ListItem>
                </List>
                <Button variant="contained" color="primary" onClick={() => history.push('/map')}>
                    Назад к карте
                </Button>
            </Box>

        </Container>
    );
};

export default WorkerProfile;
