import React from "react";
import "./footer.scss";
import img from "../picturesheadfoot/Лого.png";
import img1 from "../picturesheadfoot/Соцсети.png";
const Footer = () => {
  return (
    <div>
      <div className="alldiv">
        <div className="flex">
          <img src={img} alt="" />
          <img src={img1} alt="" />
        </div>
        <div className="">
          <p className="blackte">О компании</p>
          <p className="graytext">Услуги</p>
          <p className="graytext">Цены</p>
          <p className="graytext">Отзывы</p>
          <p className="graytext">Контакты</p>
          <p className="graytext">Вакансии</p>
          <p className="graytext">Соглашение о персональных данных</p>
          <p className="graytext">Условия использования</p>
        </div>
        <div className="">
          <p className="blackte">Полезное</p>
          <p className="graytext">Как работает наш сервис</p>
          <p className="graytext">Как покупать с оператором</p>
          <p className="graytext">Ответы на частые вопросы</p>
          <p className="graytext">Популярные магазины</p>
          <p className="graytext">Черный список магазинов</p>
          <p className="graytext">Актуальные распродажи</p>
        </div>
        <div className="">
          <p className="blackte">Спецпроекты</p>
          <p className="graytext">50% на первую доставку</p>
          <p className="graytext">Скидки для постоянных клиентов</p>
          <p className="graytext">Реферальная программа</p>
          <p className="graytext">Кэшбек Mr. Rebates и Rakuten</p>
          <p className="graytext">Stop Fraud</p>
        </div>
      </div>
        <div className="center">
          <p className="">© 2021 Okeypost . Все права защищены.</p>
        </div>
    </div>
  );
};

export default Footer;
