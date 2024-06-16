import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateRequest from './components/CreateRequest';
import MyRequests from './components/MyRequests';
import Employees from './components/Employees';
import SupportChat from './components/SupportChat';
import PassengerMessages from './components/PassengerMessages';
import EmployeeMessages from './components/EmployeeMessages';
import EmployeeAnnouncements from './components/EmployeeAnnouncements';
import RequestList from './components/RequestList';
import EmployeeMap from './components/EmployeeMap';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Создать заявку</Link>
                    </li>
                    <li>
                        <Link to="/my-requests">Список заявок</Link>
                    </li>
                    <li>
                        <Link to="/employees">Сотрудники</Link>
                    </li>
                    <li>
                        <Link to="/support-chat">Чат поддержки</Link>
                    </li>
                    <li>
                        <Link to="/employee-map">Сотрудники на карте</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<CreateRequest />} />
                <Route path="/my-requests" element={<MyRequests />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/support-chat" element={<SupportChat />} />
                <Route path="/passenger-messages" element={<PassengerMessages />} />
                <Route path="/employee-messages" element={<EmployeeMessages />} />
                <Route path="/employee-announcements" element={<EmployeeAnnouncements />} />
                <Route path="/request-list" element={<RequestList />} />
                <Route path="/employee-map" element={<EmployeeMap />} />
            </Routes>
        </div>
    );
}

export default App;
