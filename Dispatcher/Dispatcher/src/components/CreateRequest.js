import React from 'react';
import './CreateRequest.css';

const CreateRequest = () => {
    return (

        <div className="create-request">
            <h1>Создание заявки</h1>
            <form>
                <label>
                    Станция отправления:
                    <textarea type="text" name="departure"/>
                </label>
                <label>
                    Станция прибытия:
                    <textarea type="text" name="arrival"/>
                </label>
            </form>
            <form>
                <label>
                    Номер телефона пассажира:
                    <textarea type="text" name="phone"/>
                </label>
                <label>
                    ФИО пассажира:
                    <textarea type="text" name="name"/>
                </label>
            </form>
            <form>
                <label>
                    Дата и время:
                    <input type="datetime-local" id="Test_DatetimeLocal"/>
                </label>
                <label>
                    Комментарий:
                    <textarea name="comment"></textarea>
                </label>


            </form>
            <img src="https://cdn-icons-png.flaticon.com/128/2317/2317834.png" alt="ИЗТ"/>
            <img src="https://cdn-icons-png.flaticon.com/128/424/424473.png" alt="ИЗ"/>
            <img src="https://cdn-icons-png.flaticon.com/128/2932/2932941.png" alt="ИС"/>
            <img src="https://cdn-icons-png.flaticon.com/128/11740/11740233.png" alt="ИК"/>
            <img src="https://cdn-icons-png.flaticon.com/128/1230/1230928.png" alt="ИО"/>
            <img src="https://cdn-icons-png.flaticon.com/128/11106/11106171.png" alt="ДИ"/>
            <img src="https://cdn-icons-png.flaticon.com/128/2855/2855583.png" alt="ПЛ"/>
            <img src="https://cdn-icons-png.flaticon.com/128/1663/1663010.png" alt="РД"/>
            <img src="https://cdn-icons-png.flaticon.com/128/4417/4417008.png" alt="РДК"/>
            <img src="https://cdn-icons-png.flaticon.com/128/6554/6554595.png" alt="ОГД"/>
            <img src="https://cdn-icons-png.flaticon.com/128/7417/7417138.png" alt="ОВ"/>
            <img src="https://cdn-icons-png.flaticon.com/128/11487/11487301.png" alt="ИУ"/>
            <img src="https://cdn-icons-png.flaticon.com/128/1663/1663017.png" alt="ЧМ"/>
            <form>
                <label type="categories">
                    ИЗТ
                </label>
                <label type="categories">
                    ИЗ
                </label>
                <label type="categories">
                    ИС
                </label>
                <label type="categories">
                    ИК
                </label>
                <label className="categories">
                    ИО
                </label>
                <label className="categories">
                    ДИ
                </label>
                <label className="categories">
                    ПЛ
                </label>
                <label className="categories">
                    РД
                </label>
                <label className="categories">
                    РДК
                </label>
                <label className="categories">
                    ОГД
                </label>
                <label className="categories">
                    ОВ
                </label>
                <label className="categories">
                    ИУ
                </label>
                <label className="categories">
                    ЧМ
                </label>
            </form>
            <ul class="checkboxes">
                <input type="checkbox" id="checkbox1" name="checkbox1"/>
                <input type="checkbox" id="checkbox2" name="checkbox2"/>
                <input type="checkbox" id="checkbox3" name="checkbox3"/>
                <input type="checkbox" id="checkbox4" name="checkbox4"/>
                <input type="checkbox" id="checkbox5" name="checkbox5"/>
                <input type="checkbox" id="checkbox6" name="checkbox6"/>
                <input type="checkbox" id="checkbox7" name="checkbox7"/>
                <input type="checkbox" id="checkbox8" name="checkbox8"/>
                <input type="checkbox" id="checkbox9" name="checkbox9"/>
                <input type="checkbox" id="checkbox10" name="checkbox10"/>
                <input type="checkbox" id="checkbox11" name="checkbox11"/>
                <input type="checkbox" id="checkbox12" name="checkbox12"/>
                <input type="checkbox" id="checkbox13" name="checkbox13"/>
            </ul>

            <link rel="stylesheet" href="style.css"/>


            <form>
                <button type="submit"><h2>Создать заявку</h2></button>
            </form>


        </div>
    );
};

export default CreateRequest;
