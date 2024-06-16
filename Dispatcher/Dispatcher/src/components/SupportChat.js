import React from 'react';
import { Link } from 'react-router-dom';
import './SupportChat.css';

const SupportChat = () => {
    return (
        <div className="support-chat">
            <h1>Чат поддержки</h1>
            <Link to="/passenger-messages">Сообщения пассажиров</Link>
            <Link to="/employee-messages">Сообщения сотрудников</Link>
            <Link to="/employee-announcements">Объявления для сотрудников</Link>
        </div>
    );
};

export default SupportChat;
