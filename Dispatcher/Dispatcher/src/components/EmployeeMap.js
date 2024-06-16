import React from 'react';
import './EmployeeMap.css';

const EmployeeMap = () => {
    return (
        <div className="employee-map">
            <h1>Сотрудники на карте</h1>
            <div className="map">
                {/* Карта с сотрудниками */}
            </div>
            <div>

                <img src="https://metrorus.ru/metromaps/msk/css/img/shema-metro-moscow-03-04-2024.jpg" className="map"/>
                <img src="https://cdn-icons-png.flaticon.com/128/10/10581.png" className="inner1"/>
                <img src="https://cdn-icons-png.flaticon.com/128/10/10581.png" className="inner2"/>
            </div>
        </div>
    );
};

export default EmployeeMap;
