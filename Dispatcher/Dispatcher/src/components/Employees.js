import React from 'react';
import './Employees.css';

const Employees = () => {
    return (
        <div className="employees">
            <h1>Сотрудники</h1>
            <table>
                <thead>
                <tr>
                    <th>Чат с сотрудником</th>
                    <th>ФИО</th>
                    <th>Статус</th>
                    <th>Станция</th>
                    <th>Конечная станция</th>
                    <th>Время работы</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Чат с сотрудником</td>
                    <td>Петров Семён Евгеньевич</td>
                    <td>На заказе</td>
                    <td>Митино</td>
                    <td>Некрасовка</td>
                    <td>21.05.2024 10:00-20:00</td>
                </tr>
                <tr>
                    <td>Чат с сотрудником</td>
                    <td>Липин Игорь Сергеевич</td>
                    <td>Свободен</td>
                    <td>Электрозаводская</td>
                    <td>Комсомольская</td>
                    <td>21.05.2024 9:00-21:00</td>
                </tr>
                <tr>
                    <td>Чат с сотрудником</td>
                    <td>Кисилёва Ольга Андреевнаа</td>
                    <td>На заказе</td>
                    <td>Косино</td>
                    <td>Автозаводская</td>
                    <td>21.05.2024 8:30-20:30</td>
                </tr>
                {/* Другие строки */}
                <button type="submit">Сотрудники на карте</button>
                </tbody>
            </table>
        </div>
    );
};

export default Employees;