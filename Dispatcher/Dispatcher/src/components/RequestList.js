import React from 'react';
import './RequestList.css';

const RequestList = () => {
    return (
        <div className="request-list">
            <h1>Список заявок</h1>
            <table>
                <thead>
                <tr>
                    <th>Станция отправления</th>
                    <th>Станция прибытия</th>
                    <th>Статус</th>
                    <th>Дата/Время</th>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Комсомольская</td>
                    <td>Тверская</td>
                    <td>Выполнена</td>
                    <td>21.05.2024 10:00</td>
                    <td>20240521-0001</td>
                </tr>
                {/* Другие строки */}
                </tbody>
            </table>
        </div>
    );
};

export default RequestList;
